'useClient'
import estilos from "./Topo.module.css";
import Image from "next/image";
import Logo1 from "../../../../public/barbearia.png";
import {FiSun,FiMoon} from 'react-icons/fi';
import {useState} from 'react';

export default function Topo({temaDark, trocaTema}) {

    return (
    <div>
       <section className={estilos.containerTopo} >
      <Image src={Logo1} alt={"Logotipo barberia"}></Image>
      <button  onClick={trocaTema} > {temaDark?<FiSun className={estilos.botao}/>:<FiMoon className={estilos.botao}/>} </button>
    </section>
    </div>
  );
}
