import React from 'react'
import '../TarjetaHome/tarjetaHome.css'

const TarjetaHome = ( {movie} ) => {
  let urlImagen = ""; 

  if (movie.poster_path) {
    urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  }else{
    urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699562010/App%20peliculas/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093_r2tucp.png"
  }
    return (
    <div className='tarjetaHome'>
      <h1>{movie.title}</h1>
    <img className='tarjetaHome___img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaHome