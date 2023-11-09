import React from 'react';
import '../TarjetaActor/tarjetaActor.css';
import '@/app/mediaQuery.css';

const TarjetaActor = ({ actor }) => {
  let urlImagen = "";
  let name = "";
  let castId = actor.cast_id || 0; // Usar 0 si cast_id es undefined o nulo

  if (actor && actor.profile_path && actor.name) {
    urlImagen = `https://image.tmdb.org/t/p/original/${actor.profile_path}`;
    name = actor.name;
  } else {
    urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699562010/App%20peliculas/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093_r2tucp.png";
  }

  return (
    <div className='tarjetaActor'>
      <img className='tarjetaActor__img' src={urlImagen} alt={name} />
      <div className='tarjetaActor__info'>
        <h2>{name}</h2>
        <h3>{castId} episodios</h3>
      </div>
    </div>
  );
};

export default TarjetaActor;
