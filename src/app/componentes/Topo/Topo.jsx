'useClient'
import estilos from "./Topo.module.css";
import Image from "next/image";
import Logo1 from "../../../../public/barbearia.png";
import {FiSun,FiMoon} from 'react-icons/fi';
import {useState} from 'react';
export default function Topo() {
  const[temaDark,setTemaDark]= useState(false);
  function trocaTema(){
setTemaDark(!temaDark)
  }
  return (
    <div className={temaDark?estilos.temaEscuro:estilos.temaClaro}>
       <section className={estilos.containerTopo} >
      <Image src={Logo1} alt={"Logotipo barberia"}></Image>
      <button onClick={trocaTema}><FiSun/></button>
    </section>
    </div>
  );
}
