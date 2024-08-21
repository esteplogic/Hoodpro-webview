import React from 'react'
import { WebView } from 'react-native-webview';

const WebviewApp = () => {
    return (
        <WebView
            source={{ uri: 'https://hoodpro-southwest.co.uk/' }}
            style={{ flex: 1 }}
        />
    )
}

export default WebviewApp