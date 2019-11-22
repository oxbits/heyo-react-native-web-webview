import React from 'react';
import { Platform } from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';
import WWebView from 'WebView';

const WebView = Platform.OS === 'web' ? WWebView : RNWebView;

export default function App() {
  return (

    <WebView
        source={{uri: 'https://example.com'}}
        // style={{marginTop: 20}}
      />

  );
}
