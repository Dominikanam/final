export default (env = 'production') => {
	if (env !== 'development') return undefined;

	return {
		port: 3000,
		host: '0.0.0.0',
		https: false,
		public: 'localhost:3000',
		disableHostCheck: true,
		publicPath: '/',
		historyApiFallback: true,
		inline: true,
		lazy: false,
		open: true,
		overlay: {
			warnings: true,
			errors: true
		}
	};
};