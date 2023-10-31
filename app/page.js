
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '../components/NavBar/NavBar'
import TarjetaPelicula from '../components/TarjetaPelicula/TarjetaPelicula'
import FondoDinamico from '../components/FondoDinamico/FondoDinamico'
import TarjetaSerie from '../components/TarjetaSerie/TarjetaSerie'
import TarjetaFiltrado from '../components/TarjetaFiltrado/TarjetaFiltrado'
import Buscador from '../components/Buscador/Buscador'
import TarjetaCapitulo from '../components/TarjetaCapitulo/TarjetaCapitulo'
import CarouselTarjetasPelicula from '@/components/CarouselTarjetasPelicula/CarouselTarjetasPelicula'
import CarouselTarjetasSerie from '@/components/CarouselTarjetasSerie/CarouselTarjetasSerie'
import Posts from './posts/page'
import TarjetaActor from '@/components/TarjetaActor/TarjetaActor'
import Detalle from './Detalle/page'


export default function Home() {
  return (
   <>
   
   <Detalle />
   </>
    
  )
}

