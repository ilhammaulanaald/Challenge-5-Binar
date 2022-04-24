import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarDefault } from './Assets/Components/Navbar/NavbarDefault';
import { FooterDefault } from './Assets/Components/Footer/FooterDefault';
import { Provider } from 'react-redux';
import store from "./Redux/Store/Store";
import Teshome from './Assets/Components/Card/teshome';

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
  <NavbarDefault/>
  <Provider store={store}>
  <Teshome/>
  </Provider>
    <FooterDefault/>
  </React.StrictMode>,
  document.getElementById('root')
);  