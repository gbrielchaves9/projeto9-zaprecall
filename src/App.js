//import React, { useState } from "react";
import React from 'react';
import Imagem from "./Imagem";
import Inferior from "./Inferior";
import ListaPerguntas from "./ListaPerguntas";
import cards from "./cards"
//import styled from 'styled-components';

export default function App() {
  
  return (
    <>
    
      <Imagem />
      <ListaPerguntas card={cards}/>
      <Inferior />
     
    </>
  );
}
