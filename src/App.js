import React, { Component } from 'react'; 
import {Provider} from 'react-redux';


import { Container } from 'reactstrap';
import MainLayout from './components/MainLayout';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 
import store from './store/store';
import AppNavbar from './components/AppNavbar';


class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
      <AppNavbar/>
          <Container>
            <MainLayout/>
          </Container>
      </Provider>
      </div>
    );
  }
}

export default App;
