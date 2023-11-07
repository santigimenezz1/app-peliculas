import React from "react"
import '../HeaderReparto/headerReparto.css'
import Link from "next/link"
const HeaderReparto = ({idPelicula, idSerie ,pelicula} )=>{
    const urlImagen = `https://image.tmdb.org/t/p/original/${pelicula.poster_path}`

   return (
    <div className="headerReparto">
        <img src={urlImagen}></img>
        <div className="headerReparto__info">
        <h1 className="headerReparto__info__titulo">{pelicula.title}</h1>
        {
            idPelicula ? (
        <Link href={`/detalle/${idPelicula}`}>
        <h1 className="headerReparto__info__volver">Volver</h1>
        </Link>
            )
         : (
            <Link href={`/detalleSerie/${idSerie}`}>
            <h1 className="headerReparto__info__volver">Volver</h1>
            </Link>
         )
        }
        </div>
    </div>
   ) 
}
export default HeaderReparto