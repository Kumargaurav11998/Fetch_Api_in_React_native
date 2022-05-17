import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Resource/Helper/Store';
import MainNavigation from './Resource/routes/MainNavigation/MainNavigation';

function App() {
  return (
    <Provider store={store}>
      <MainNavigation></MainNavigation>
    </Provider>
  );
}

export default App;
