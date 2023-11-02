import React from "react"
import '../HeaderReparto/headerReparto.css'
const HeaderReparto = ( {pelicula} )=>{
    const urlImagen = `https://image.tmdb.org/t/p/original/${pelicula.poster_path}`

   return (
    <div className="headerReparto">
        <img src={urlImagen}></img>
        <div className="headerReparto__info">
        <h1 className="headerReparto__info__titulo">{pelicula.title}</h1>
        <h1 className="headerReparto__info__volver">Volver</h1>
        </div>
    </div>
   ) 
}
export default HeaderReparto