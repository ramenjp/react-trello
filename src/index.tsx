import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import Store from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));