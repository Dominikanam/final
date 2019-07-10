import path from 'path';
import getPlugins from './tools/webpack.plugins.js';
import getStylesModule from './tools/webpack.styles.js';
import getDevServerOptions from './tools/webpack.devserver.js';

module.exports = (env = 'production') => {
	const isDev = env === 'development';

	return {
		mode: isDev ? env : 'production',
		bail: true, // Causes webpack to return error code on failure
		devtool: isDev && 'sourcemap',
		entry: {
			app: ['@babel/polyfill', 'whatwg-fetch', './client/src/index']
		},
		target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
		output: {
			publicPath: '/',
			path: `${__dirname}/client/dist`,
			filename: isDev ? '[name].js' : '[name].[chunkhash].js', // Don't use hashes in isDev mode for better performance
			chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash].chunk.js'
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					app: {
						test: /[.\\/]client[\\/]src[\\/]index[\\/]/,
						name: 'app'
					}
				}
			}
		},
		plugins: getPlugins(env),
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					include: path.join(__dirname, 'client/src'),
					use: [{ loader: 'babel-loader' }]
				},
				{ test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: 'url-loader?limit=10000&mimetype=application/font-woff'
				},
				{
					test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
					loader: 'file-loader?limit=10000&mimetype=application/octet-stream'
				},
				{
					test: /\.svg$/,
					loader: 'file-loader?name=[name].svg&limit=10000&mimetype=image/svg+xml'
				},
				{ test: /\.ico$/, loader: 'file-loader?name=[name].ico&mimeType=image/x-icon' },
				{ test: /\.xml$/, loader: 'file-loader?name=[name].xml&mimeType=application/xml' },
				{ test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[path][name].[ext]' },
				getStylesModule(env)
			]
		},
		devServer: getDevServerOptions(env)
	};
};
