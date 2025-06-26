import estilos from "./Sobre.module.css";
export default function Sobre({temaDark}) {
  return (
    <footer className={`${estilos.containerSobre} ${temaDark?estilos.temaEscuro:estilos.TemaClaro}`}>
      <div>
      <h1>Bem vindo a BARBER SHOP</h1>
      <p className={estilos.paragrafoBold}>  
        Nossa Barbearia sempre oferece profissionais de qualidade e estamos
        prontos para lidar com suas maiores expectativas.
      </p>
      <p>     
        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
        equipe premiada que demonstrou o talento de mestres barbeiros em vários
        concursos de estilos. Deixe nosso barbeiro ser seu estilista pessoal e
        você nunca ficará desapontado.
      </p>
      <p className={estilos.assinatura}>S. Kelly</p>
      </div>
    </footer>
  );
}
