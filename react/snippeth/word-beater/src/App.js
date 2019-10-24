import React, { useEffect } from 'react';

import Header from "./components/header/Header";
import Buttons from './components/buttons/Buttons'
import WordAndInput from './components/inputs/WordAndInput'

import { Provider } from "react-redux";
import store from './store'

import { startGame } from './actions/levels'

const App = () => {

  useEffect(() => {
    store.dispatch(startGame())
  }, [])

  const height = {
    height: '100vh'
  }

  return (
    <Provider store={store}>
      <div className="bg-dark text-white" style={height}>
        <Header />
        <div className="container text-center">
          <Buttons />
          <WordAndInput />
        </div>
      </div>
    </Provider >
  );
}

export default App;
