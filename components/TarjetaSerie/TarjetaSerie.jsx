import React from 'react'
import './tarjetaSerie.css'
import Link from 'next/link'
import '@/app/mediaQuery.css'

const TarjetaSerie = ( {movie} ) => {
  let urlImagen = ""
  if (movie.poster_path) {
      urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    }else{
      urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699562010/App%20peliculas/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093_r2tucp.png"
    }  return (
    <div className='tarjetaSerie'>
    <img className='tarjetaSerie__img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaSerie