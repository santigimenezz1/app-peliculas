
import { peticionCapituloTemporada } from "@/app/peticionesFetch/page"
import React from "react"
import '../NumeroTemporada/numeroTemporada.css'
const NumeroTemporada = ( {season, temporada, index, setCapitulosTemporada, id} )=>{
    let numero = index + 1
    async function cambiarCapitulos (numeroTemporada, id ){
      let peticion = await peticionCapituloTemporada(numeroTemporada, id)
      let capitulos = peticion.episodes 
      setCapitulosTemporada(capitulos)
    }
    return (
        <div onClick={()=>cambiarCapitulos(numero, id )} className="numeroTemporada">
            <h1 style={{color:"white", fontSize:"15px",cursor:"pointer", display:"inline-block"}}>{temporada}</h1>
        </div>
    )
}
export default NumeroTemporada