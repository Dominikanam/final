import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import GenerateJsonPlugin from 'generate-json-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import manifest from '../client/src/resources/manifest.json';

export default (env = 'production') => {
	const isDev = env === 'development';

	const plugins = [
		// Generate HTML file that contains references to generated app bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
		new HtmlWebpackPlugin({
			template: 'client/src/index.ejs',
			chunks: ['app'],
			inject: true,
			minify: !isDev && {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
				sortAttributes: true,
				sortClassName: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: isDev ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
		}),
		new GenerateJsonPlugin('manifest.json', manifest)
	];

	if (isDev) {
		plugins.push(new webpack.LoaderOptionsPlugin({ debug: true, logLevel: 'warn' }));
	} else {
		// Hash the files using MD5 so that their names change when the content changes.
		plugins.push(new WebpackMd5Hash());
	}

	return plugins;
};