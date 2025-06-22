
"use client"
import {useState} from 'react';
import Topo from './componentes/Topo/Topo';
import Banner from './componentes/Banner/Banner.jsx'
import Sobre from './componentes/Sobre/Sobre.jsx'
import estilos from "./page.module.css";

export default function Home() {
  const [temaEscuro,setTemaEscuro]= useState(false);
  function alterarTema(){
    setTemaEscuro(!temaEscuro);
  }
  return (
    <main className={temaEscuro?estilos.temaDark:estilos.temaLight}>

      <Topo/>
      <Banner/>
      <Sobre/>
       
    </main>
  );
}
