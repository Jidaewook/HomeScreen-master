import React from 'react';
import { WebView } from 'react-native-webview';


const Privacy = () => {
    return (
      <WebView 
        source={{ uri: 'https://naughty-gates-8e969c.netlify.app/#/personalterm' }} 
        style={{ marginTop: 5, backgroundColor: 'white' }} 
      />
    
    );
};

export default Privacy;
