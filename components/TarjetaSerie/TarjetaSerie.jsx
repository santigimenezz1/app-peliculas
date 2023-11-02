import React from 'react'
import './tarjetaSerie.css'
import Link from 'next/link'

const TarjetaSerie = ( {movie} ) => {
  const urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  return (
    <div className='tarjetaSerie'>
    <img className='tarjetaSerie__img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaSerie