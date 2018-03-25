import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; 
axios.defaults.headers.post['Content-Type'] = 'application/json';

var interceptor = axios.interceptors.request.use(request => {
        console.log(request);
        // Edit request config before return
        return request;

    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

// axios.interceptors.request.eject(interceptor);

axios.interceptors.response.use(response => {
        console.log(response);
        // Edit response config before return
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
