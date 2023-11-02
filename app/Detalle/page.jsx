import React from 'react'
import './detalle.css'
import TarjetaImagenDetalle from '@/components/TarjetaImagenDetalle/TarjetaImagenDetalle'
import BotonVer from '@/components/BotonVer/BotonVer'

const Detalle = ( {data} ) => {
  if (!data) {
    // Verifica si los datos aún no se han cargado
    return null;
  }
  const urlImagen = `https://image.tmdb.org/t/p/original/${data.poster_path}`
  return (
    <div className='detalle'>
        <div className='detalle__imagenPrincipal'>
      <TarjetaImagenDetalle urlImagen={urlImagen}/>
        </div>
      <img className='detalle__imgFondo' src={urlImagen}></img>
      <div className='detalle__info'>
         <div className='detalle__info__titulo'>
            <h1>{data.title} ({(data.release_date).slice(0,4)})</h1>
            <h3>{data.genres[0].name}</h3>
         </div>
         <div className='detalle__info__description'>
            <h1>Vista general</h1>
            <span>{data.overview}</span>
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


