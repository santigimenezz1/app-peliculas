'use client'
import React, { useEffect, useState } from 'react'
import TarjetaImagenDetalle from '@/components/TarjetaImagenDetalle/TarjetaImagenDetalle'
import BotonVer from '@/components/BotonVer/BotonVer'
import '@/app/mediaQuery.css'
import { Button } from '@mui/base'
import BotonBack from '@/components/BotonBack/BotonBack'
import BotonVideoYoutube from '@/components/BotonVideoYoutube/BotonVideoYoutube'
import Video from '@/components/BotonVideoYoutube/Video/Video'


const Detalle = ( {idYoutube, data} ) => {
  const [showVideo, setShowVideo] = useState(false);
  const [estadoBotonCerrar, setEstadoBotonCerrar] = useState(false)
  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const urlImagen = `https://image.tmdb.org/t/p/original/${data.poster_path}`
  return (
    <>
    <div className='detalle'>
        <div className='detalle__imagenPrincipal'>
          <BotonBack />
      <TarjetaImagenDetalle urlImagen={urlImagen}/>
        </div>
      <img className='detalle__imgFondo' src={urlImagen}></img>
      <div className='detalle__info'>
         <div className='detalle__info__titulo'>
            <h1>{data.title} ({(data.release_date).slice(0,4)})</h1>
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
         <BotonVideoYoutube setEstadoBotonCerrar={setEstadoBotonCerrar} videoId={"EcKZysWvMno"} openVideo={openVideo} showVideo={openVideo} setShowVideo={setShowVideo} />
         </div>
      </div>
      <div className='videoReproductor'>
         <Video setEstadoBotonCerrar={setEstadoBotonCerrar} estadoBotonCerrar={estadoBotonCerrar} videoId={idYoutube} closeVideo={closeVideo} openVideo={openVideo} showVideo={showVideo} setShowVideo={setShowVideo} />
      </div>
      </div>
    </>
  )
}

export default Detalle


