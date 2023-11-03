'use client'
import React, { useState } from "react"
import '../Temporadas/temporadas.css'
import NumeroTemporada from "./NumeroTemporada/NumeroTemporada"
import TarjetaCapitulo from "../TarjetaCapitulo/TarjetaCapitulo"
import CarouselTarjetasCapitulos from "../CarouselTarjetasCapitulos/CarouselTarjetasCapitulos"
const Temporadas = ({ data }) => {
    let seasons = data.seasons
    let id = data.id
    const [capitulosTemporada, setCapitulosTemporada] = useState([])

    return (
        <div className="temporadas">
            <div>
                <h1 className="titulo__temporadas">Episodios</h1>
            </div>
            <div className="temporadas__numeroTemporada">
                {
                    seasons.filter((season) => (season.name !== "Especiales")).map((season, index) => (
                        <NumeroTemporada id={id} setCapitulosTemporada={setCapitulosTemporada} season={season} temporada={season.name} index={index} />
                    ))
                }
            </div>
            <div className="tempradas__tarjetasCapitulos">
                <CarouselTarjetasCapitulos capitulosTemporada={capitulosTemporada} />
            </div>

        </div>
    )
}
export default Temporadas