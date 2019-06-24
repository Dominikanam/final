// source: https://github.com/yahoo/react-intl/blob/master/examples/translations/scripts/translate.js
require('@babel/register'); // so we can use babel for other files except this file.

import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';
import testTranslator from './testTranslator';

const MESSAGES_PATTERN = './dist/messages/**/*.json';
const LANG_DIR = './src/translations/';

// The locale code for Yoruba - deemed obscure enough that this is the language the 'fake' translator will be set to
// clearly if we need to support this locale in the future this would need to be changed.
const OBSCURE_LOCALE = 'yo';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same id. The result
// is a flat collection of id: message pairs for the app's default locale.
const defaultMessages = globSync(MESSAGES_PATTERN)
	.map(filename => fs.readFileSync(filename, 'utf8'))
	.map(file => JSON.parse(file))
	.reduce((collection, descriptors) => {
		descriptors.forEach(({ id, defaultMessage }) => {
			if (collection.hasOwnProperty(id)) {
				throw new Error(`Duplicate message id: ${id}`);
			}
			collection[id] = defaultMessage;
		});

		return collection;
	}, {});

const getMessages = function(defaultMessages, translator) {
	return Object.keys(defaultMessages)
		.map(id => [id, defaultMessages[id]])
		.reduce((collection, [id, defaultMessage]) => {
			collection[id] = translator.translate(defaultMessage);
			return collection;
		}, {});
};

const languages = [{ locale: OBSCURE_LOCALE, translator: testTranslator }];

mkdirpSync(LANG_DIR);
//write default messages
fs.writeFileSync(LANG_DIR + 'en-US.json', JSON.stringify(defaultMessages, null, 2));

//create supported language messages
languages.map(l => {
	fs.writeFileSync(
		LANG_DIR + l.locale + '.json',
		JSON.stringify(getMessages(defaultMessages, l.translator), null, 2)
	);
});
