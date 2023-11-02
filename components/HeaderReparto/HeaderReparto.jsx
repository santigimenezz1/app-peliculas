import React from "react"
import '../HeaderReparto/headerReparto.css'
const HeaderReparto = ()=>{
   return (
    <div className="headerReparto">
        <img src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698623623/App%20peliculas/scale_ytxylo.jpg"></img>
        <div className="headerReparto__info">
        <h1 className="headerReparto__info__titulo">Titulo de la pelicula(2015)</h1>
        <h1 className="headerReparto__info__volver">Volver</h1>
        </div>
    </div>
   ) 
}
export default HeaderReparto