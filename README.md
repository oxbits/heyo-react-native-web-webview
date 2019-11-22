# heyo-react-native-web-webview
the fastest way to get a triple app up and running containing web content

run these commands:
```bash
expo init heyo_rnwwv
cd heyo_rnwwv/
expo customize:web
expo eject
npm i react-native-webview
npm i react-native-web-webview
```

edit `webpack.config.js` to look like this:
```javascript
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
```

edit `App.js` to look like this:
```javascript
import React from 'react';
import { Platform } from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';
import WWebView from 'WebView';

const WebView = Platform.OS === 'web' ? WWebView : RNWebView;

export default function App() {
  return (

    <WebView
        source={{uri: 'https://example.com'}}
      />

  );
}

```

then run this:
```bash
expo start --web
```

you now have apps:

- web / mobile web
- android
- ios

all using a webview
