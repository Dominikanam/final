import Translator from './lib/translator';

// inspired by https://github.com/shanselman/Psuedoizer
const replacements = new Map([
	['A', 'Å'],
	['B', 'ß'],
	['C', 'C'],
	['D', 'Đ'],
	['E', 'Ē'],
	['F', 'F'],
	['G', 'Ğ'],
	['H', 'Ħ'],
	['I', 'Ĩ'],
	['J', 'Ĵ'],
	['K', 'Ķ'],
	['L', 'Ŀ'],
	['M', 'M'],
	['N', 'Ń'],
	['O', 'Ø'],
	['P', 'P'],
	['Q', 'Q'],
	['R', 'Ŗ'],
	['S', 'Ŝ'],
	['T', 'Ŧ'],
	['U', 'Ů'],
	['V', 'V'],
	['W', 'Ŵ'],
	['X', 'X'],
	['Y', 'Ÿ'],
	['Z', 'Ż'],
	['a', 'ä'],
	['b', 'þ'],
	['c', 'č'],
	['d', 'đ'],
	['e', 'ę'],
	['f', 'ƒ'],
	['g', 'ģ'],
	['h', 'ĥ'],
	['i', 'į'],
	['j', 'ĵ'],
	['k', 'ĸ'],
	['l', 'ľ'],
	['m', 'm'],
	['n', 'ŉ'],
	['o', 'ő'],
	['p', 'p'],
	['q', 'q'],
	['r', 'ř'],
	['s', 'ş'],
	['t', 'ŧ'],
	['u', 'ū'],
	['v', 'v'],
	['w', 'ŵ'],
	['x', 'χ'],
	['y', 'y'],
	['z', 'ž']
]);

const translatorFunc = text => {
	return [...text].map(l => (replacements.has(l) ? replacements.get(l) : l)).join('');
};

export default new Translator(translatorFunc);
