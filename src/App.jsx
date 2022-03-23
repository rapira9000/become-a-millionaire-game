import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Screen from './components/Screen/Screen';
import store from './redux/redux-store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Screen />
    </div>
  </Provider>
);

export default App;
