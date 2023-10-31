import React from 'react'
import './tarjetaCapitulo.css'
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula'

const TarjetaCapitulo = () => {
  return (
    <div className='tarjetaCapitulo'>
    <TarjetaPelicula />
    <div className='tarjetaCapitulo__info'>
     <h1>1.Nombre del capitulo</h1>
     <span>Breve descripcion de lo que trada el capitulo Breve descripcion de lo que trada el capitulo</span>
    </div>
      
    </div>
  )
}

export default TarjetaCapitulo