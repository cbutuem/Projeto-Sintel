import './components/style.css';
import { Tabela } from './components/Tabela';
import { Nome } from "./components/Filtro/Nome"
import { Numero } from "./components/Filtro/Numero"
import { Data } from "./components/Filtro/Data"
import Popup from "./components/Popup"
import { Dados } from "./components/Dados"
import React, { useState } from 'react';

function App() {
  const words = Dados.map(inf => inf);
  
  const filter = words.filter(op => op.status); 
  console.log(words, filter, "vish");
  return (
    <div>
      <header>
        <div class= "header-faixa">
          <img src = "https://www.sintelautomotive.com/sites/all/themes/sintel-new-erro/logo.png" alt = "logo" id="logo"></img>
        </div>
      </header>
      <body>
        <div class= "all-box">
          <div class= "logo-inbox">
            <span class= "inbox">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" fill="#007B76"/></svg>
              Inbox
            </span>
          </div>
          <div class= "filtro-data">
            <span>So pra ficar demarcado</span>
          </div>
          <div class= "tabela">
            <table class= "fixed_header">
              <Nome/>
              <Tabela/>
            </table>  
          </div>
        </div>
        <div>
         
        </div>
      </body>
    </div>
  );
}

export default App;
