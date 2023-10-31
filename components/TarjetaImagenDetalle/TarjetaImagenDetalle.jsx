import React from 'react'
import '../TarjetaImagenDetalle/tarjetaImagenDetalle.css'
import ReproductorVideo from './ReproductorVideo/ReproductorVideo'

const TarjetaImagenDetalle = () => {
  return (
    <div className='tarjetaImagenDetalle'>
      <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698713821/App%20peliculas/fC2HDm5t0kHl7mTm7jxMR31b7by_lzpiao.jpg'></img>
      <ReproductorVideo />
    </div>
  )
}

export default TarjetaImagenDetalle
