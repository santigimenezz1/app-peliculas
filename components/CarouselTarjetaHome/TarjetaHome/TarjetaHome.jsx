import React from 'react'
import '../TarjetaHome/tarjetaHome.css'

const TarjetaHome = ( {movie} ) => {
  const urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  return (
    <div className='tarjetaHome'>
      <h1>{movie.title}</h1>
    <img className='tarjetaHome___img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaHome