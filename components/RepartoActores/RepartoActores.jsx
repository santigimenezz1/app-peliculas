import React from "react"
import '../RepartoActores/repartoActores.css'
import TarjetaActor from "../TarjetaActor/TarjetaActor"

const RepartoActores = ()=>{
    return (
        <div>
            <h1 className="titulo__repartoActores">Reparto</h1>
        <div className="repartoActores">
            <div className="repartoActores__tarjetas">
            <TarjetaActor />
            <TarjetaActor />
            <TarjetaActor />
            <TarjetaActor />
            <TarjetaActor />
            <TarjetaActor />
            <TarjetaActor />
            <TarjetaActor />

            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <button style={{fontSize:"12px", color:"white", background:"none", cursor:"pointer", border:"none", fontWeight:"bold"}}>Ver mas</button>
            </div>
        </div>
           


        </div>
    )
}
export default RepartoActores