
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
import Posts, { peticionPeliculasNuevas, peticionPeliculasSeViene, peticionPeliculasTendencia, peticionPeliculaspPopulares } from './peticionesFetch/page'
import TarjetaActor from '@/components/TarjetaActor/TarjetaActor'
import Detalle from './detalle/page'
import RepartoActores from '@/components/RepartoActores/RepartoActores'
import Temporadas from '@/components/Temporadas/Temporadas'
import FondoInteractivo from '@/components/FondoInteractivo/FondoInteractivo'
import peticionPeliculas from './peticionesFetch/page'
export default async function Home() {
  
 let data = await peticionPeliculaspPopulares()
 let peliculasTendecia = await  peticionPeliculasTendencia()
 let peliculasSeViene = await peticionPeliculasSeViene ()
 let nuevasPeliculas = await peticionPeliculasNuevas ()

  return (
   <>
   <FondoDinamico />
   <CarouselTarjetasPelicula data={data} text={"Lo mas popular"} />
   <CarouselTarjetasSerie data={nuevasPeliculas} text={"Recientes"}  />
   <CarouselTarjetasSerie data={peliculasSeViene} text={"Lo que se viene"} />
   <FondoInteractivo />
   <CarouselTarjetasSerie data={peliculasTendecia} text={"Tendencia"} />
   <CarouselTarjetasPelicula data={data}  />
   <CarouselTarjetasPelicula data={nuevasPeliculas} />
   </>
  )
}

