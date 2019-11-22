const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const rule = {
  test: /postMock.html$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.

  config.resolve.alias['WebView'] = 'react-native-web-webview';

  module.rules = [rule,]

  return config;
};
