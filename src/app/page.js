
"use client"
import {useState} from 'react';
import Topo from './componentes/Topo/Topo';
import Banner from './componentes/Banner/Banner.jsx'
import Sobre from './componentes/Sobre/Sobre.jsx'
import estilos from "./page.module.css";

export default function Home() {
  const[temaDark,setTemaDark]= useState(false);
  function trocaTema(){
setTemaDark(!temaDark);
  }
  return (
    <main className={temaDark?estilos.temaEscuro:estilos.temaClaro}>

      <Topo temaDark={temaDark} trocaTema={trocaTema} />
      <Banner/>
      <Sobre temaDark={temaDark}/>
       
    </main>
  );
}
