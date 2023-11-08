import React from 'react'
import '../detalle/detalle.css'
import TarjetaImagenDetalle from '@/components/TarjetaImagenDetalle/TarjetaImagenDetalle'
import BotonVer from '@/components/BotonVer/BotonVer'
import BotonBack from '@/components/BotonBack/BotonBack'

const DetalleSerie = ( {data} ) => {
  const urlImagen = `https://image.tmdb.org/t/p/original/${data.poster_path}`

  return (
    <div className='detalle'>
        <div className='detalle__imagenPrincipal'>
        <BotonBack />
      <TarjetaImagenDetalle urlImagen={urlImagen}/>
        </div>
      <img className='detalle__imgFondo' src={urlImagen}></img>
      <div className='detalle__info'>
         <div className='detalle__info__titulo'>
         <h1>{data.name} ({(data.first_air_date).slice(0,4)})</h1>
         <h3>{data.genres[0].name}</h3>
            {
              data.genres.name &&
            <h3>{data.genres[0].name}</h3>
            }
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

export default DetalleSerie


