import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	// eslint-disable-next-line react/jsx-filename-extension
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

// If you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
