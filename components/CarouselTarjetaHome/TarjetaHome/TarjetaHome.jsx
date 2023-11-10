 "use client"
import React from 'react'
import '../TarjetaHome/tarjetaHome.css'

const TarjetaHome = ( {movie} ) => {

  
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
   const urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    return (
    <div onClick={()=>scrollToTop()} className='tarjetaHome'>
      <h1>{movie.title}</h1>
    <img className='tarjetaHome___img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaHome