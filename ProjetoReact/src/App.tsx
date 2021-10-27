import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';
import Container from './components/Container/indexContainer';

function App() {
  return (
    <>
      <header>Hello</header>
      <div className="container">
        <div className="header"></div>
        <div className="menu_left"></div>
        <div className="content"></div>
        <div className="footer">
          Criado e desenvolvido por Samara
        </div>
      </div>
      
     
      <Button description="Primeiro botão"/>
      <Button description="Segundo botão"/>
      <Button/>
      <Container/>
   
      
    </>
  );
}

export default App;
