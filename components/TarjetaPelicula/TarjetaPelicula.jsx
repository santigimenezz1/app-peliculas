import React from 'react'
import './tarjetaPelicula.css'

const TarjetaPelicula = ( {movie} ) => {
  const urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`

  return (
    <div className='tarjetaPelicula'>
    <img className='tarjetaPelicula__img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaPelicula