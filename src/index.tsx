import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TranslationsProvider } from 'context-multi-language';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TranslationsProvider defaultLocale="en" remoteTranslationsUrl="https://raw.githubusercontent.com/burhanyilmaz/translations/master/locales.json">
      <App />
    </TranslationsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
