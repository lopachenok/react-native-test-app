import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AwesomeProject from './AwesomeProject'
const store = configureStore();
import configureStore from '../store/configureStore'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AwesomeProject />
      </Provider>
    );
  }
}
