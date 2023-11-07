import React from 'react'
import '../TarjetaActor/tarjetaActor.css'
import '@/app/mediaQuery.css'


const TarjetaActor = ( {actor} ) => {
  const urlImagen = `https://image.tmdb.org/t/p/original/${actor.profile_path}`

  return (
    <div className='tarjetaActor'>
        <img className='tarjetaActor__img' src={urlImagen}></img>
        <div className='tarjetaActor__info'>
        <h2>{actor.name}</h2>
        <h3>{actor.cast_id} episodios</h3>
        </div>
    </div>
  )
}

export default TarjetaActor
