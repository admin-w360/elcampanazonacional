import './bootstrap';
import React from "react";
import ReactDOM from "react-dom/client";
import {store, persist} from "./store";
import {Provider} from "react-redux";
// @ts-ignore
import {PersistGate} from "redux-persist/integration/react";
import App from "./app";
import '../css/style.css';
import '../sass/app.scss';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container as Element);
root.render(
    <Provider store={store}>
        <PersistGate persistor={persist}>
            <App/>
        </PersistGate>
    </Provider>
);

