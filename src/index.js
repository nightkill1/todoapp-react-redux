import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className={'App'} />
    </Provider>



  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

