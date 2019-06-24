import React from 'react'; // eslint-disable-line no-unused-vars
import flatMap from 'lodash/flatMap';
/* locales */
import en from 'react-intl/locale-data/en';
import yo from 'react-intl/locale-data/yo';
/* messages */
import enMessages from '../translations/en-US.json';
import testMessages from '../translations/yo.json';

export default class IntlHelper {
	constructor() {
		this.SupportedLocales = [[['en-US'], enMessages], [['yo', 'yo-NG'], testMessages]];
	}

	getNavigatorLanguage() {
		return navigator.languages && navigator.languages.length > 0
			? navigator.languages[0]
			: navigator.language || navigator.userLanguage;
	}

	getBrowserLanguage() {
		return this.getNavigatorLanguage();
	}

	getLocaleData() {
		return [...en, ...yo];
	}

	// react-intl-helper throws error on empty string values
	replaceEmptyStrings(messages) {
		for (const key in messages) {
			if (!messages[key]) messages[key] = '\u{200B}'; // Zero-width space
		}

		return messages;
	}

	getSupportedLocales() {
		// react intl requires a specific object, so map and flatten our array to this format
		return flatMap(this.SupportedLocales, ([langCodes, messages]) =>
			langCodes.map(locale => ({
				locale,
				messages: {
					...messages
				}
			}))
		);
	}

	getInitialIntlState(userLanguage) {
		const locales = this.getSupportedLocales();
		// select the exact user language or use the first supported locale as the default
		return locales.find(x => x.locale == userLanguage) || locales[0];
	}

	shimRender(render) {
		if (!window.Intl) {
			require(['intl'], Intl => {
				window.Intl = Intl;
				render();
			});
		} else {
			render();
		}
	}
}

export const noWrap = msgTxt => <>{msgTxt}</>;
