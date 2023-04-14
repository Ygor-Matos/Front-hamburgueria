import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hamburguer from './Screens/Hamburguer/Hamburguer';
import 'bootswatch/dist/vapor/bootstrap.css';
import Ingrediente from './Screens/Ingrediente/Ingrediente';
import Preencher from './components/Preencher';
import Navbar from './components/NavBar';
import AppRoutes from './main/AppRoutes';


export default class App extends React.Component{

  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <br/>
        
        
        <AppRoutes/>
       
      </div>
    );
  }
  









}
