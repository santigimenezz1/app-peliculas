import React from 'react'
import '../Detalle/detalle.css'
import TarjetaImagenDetalle from '@/components/TarjetaImagenDetalle/TarjetaImagenDetalle'
import BotonVer from '@/components/BotonVer/BotonVer'

const Detalle = () => {
  return (
    <div className='detalle'>
        <div className='detalle__imagenPrincipal'>
      <TarjetaImagenDetalle />
        </div>
      <img className='detalle__imgFondo' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698714156/App%20peliculas/hPea3Qy5Gd6z4kJLUruBbwAH8Rm_gxpfwo.jpg'></img>
      <div className='detalle__info'>
         <div className='detalle__info__titulo'>
            <h1>Better call saul (2015)</h1>
            <h3>Drama, crimen</h3>
         </div>
         <div className='detalle__info__description'>
            <h1>Vista general</h1>
            <span>Esta precuela de "Breaking Bad" nominada al Emmy narra la vida del picapleitos Jimmy McGill y su transformación en Saul Goodman, el abogado de moral laxa.</span>
         </div>
         <div className='detalle__info__creador'>
            <h1>Vince Gilligan</h1>
            <h2>Creador</h2>
         </div>
         <div>
         <BotonVer />
         </div>
      </div>
    </div>
  )
}

export default Detalle
