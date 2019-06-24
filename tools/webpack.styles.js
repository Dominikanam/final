import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (env = 'production') => {
	const dev = env === 'development';

	const loaders = [];

	if (dev) {
		loaders.push('css-hot-loader');
		loaders.push('style-loader');
	} else {
		loaders.push(MiniCssExtractPlugin.loader);
	}

	loaders.push({
		loader: 'css-loader',
		options: {
			modules: true,
			sourceMap: dev,
			localsConvention: 'asIs'
		}
	});
	loaders.push('sass-loader');

	return {
		test: /\.(css|scss)$/,
		exclude: path.join(__dirname, 'node_modules'),
		use: loaders
	};
};
