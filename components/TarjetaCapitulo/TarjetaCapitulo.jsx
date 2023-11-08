import React from 'react'
import './tarjetaCapitulo.css'
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula'

const TarjetaCapitulo = ({capitulo, index}) => {
  let indexId = index + 1
  const urlImagen = `https://image.tmdb.org/t/p/original/${capitulo.still_path}`
  return (
    <div className='tarjetaCapitulo'> 
     <img src={urlImagen}></img>
    <div className='tarjetaCapitulo__info'>
     <h1>{indexId}.{capitulo.name} ({capitulo.runtime}m)</h1>
     <span>{capitulo.overview}</span>
    </div>
      
    </div>
  )
}

export default TarjetaCapitulo