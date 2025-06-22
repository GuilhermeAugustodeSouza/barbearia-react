import Image from 'next/image';
import Logo2 from'../../../../public/banner.jpg';
import estilos from './Banner.module.css'

export default function Banner(){
    return(
        <div className={estilos.containerBanner}>
        <Image src={Logo2} alt={'Imagem da barbearia'}></Image>
    </div>
    )
}