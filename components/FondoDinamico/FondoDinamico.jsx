import React from 'react'
import './fondoDinamico.css'
import CarouselTarjetasSerie from '../CarouselTarjetasSerie/CarouselTarjetasSerie'
import { peticionPeliculaspPopulares } from '@/app/peticionesFetch/page'
import CarouselTarjetasPelicula from '../CarouselTarjetasPelicula/CarouselTarjetasPelicula'

async function FondoDinamico () {
  let data = await peticionPeliculaspPopulares()

  return (
    <div className='fondoDinamico'>
      <div className='fondoDinamico__tarjetas'>
      <CarouselTarjetasPelicula data={data} text={"Lo mas popular"} />
      </div>
    <div className='fondoDinamico__info'>
    <h1>Titulo de la pelicula</h1>
    <h4>Duracion de la pelicula</h4>
    </div>
    <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699067867/App%20peliculas/compose_1_q5wh5y.jpg'></img>
    </div>
  )
}

export default FondoDinamico