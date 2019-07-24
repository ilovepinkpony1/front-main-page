import React from 'react';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { reducer } from './redux/reducers';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  )
}
