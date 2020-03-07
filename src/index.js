import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import AppC from './containers/App';
import './index.scss'

import createStore from './store'
const store = createStore();



ReactDOM.render(
  <Provider store={store}>
    <AppC/>
  </Provider>, document.getElementById('root'));

