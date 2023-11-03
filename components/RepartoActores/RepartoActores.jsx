import React from "react"
import '../RepartoActores/repartoActores.css'
import TarjetaActor from "../TarjetaActor/TarjetaActor"
import Link from "next/link"

const RepartoActores = ( {reparto, id} )=>{
    
    return (
        <div>
            <h1 className="titulo__repartoActores">Reparto</h1>
        <div className="repartoActores">
            <div className="repartoActores__tarjetas">
         {
            reparto.cast.slice(0,8).map((actor)=>(
                <Link href={`/detalle/${id}/Biografia/${actor.name}`}>
                <TarjetaActor actor={actor} />
                </Link>
            ))
         }
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Link href={`/detalle/${id}/${id}`}>
                <button style={{fontSize:"12px", color:"white", background:"none", cursor:"pointer", border:"none", fontWeight:"bold"}}>Ver mas</button>
                </Link>
            </div>
        </div>
           


        </div>
    )
}
export default RepartoActores