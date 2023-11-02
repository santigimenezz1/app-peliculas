import React from "react"
import '../Temporadas/temporadas.css'
import NumeroTemporada from "./NumeroTemporada/NumeroTemporada"
import TarjetaCapitulo from "../TarjetaCapitulo/TarjetaCapitulo"
import CarouselTarjetasCapitulos from "../CarouselTarjetasCapitulos/CarouselTarjetasCapitulos"
const Temporadas = ()=>
{
    return (
        <div className="temporadas">
            <div>
                <h1 className="titulo__temporadas">Episodios</h1>
            </div>
            <div className="temporadas__numeroTemporada">
                <NumeroTemporada temporada={"Temprada 1"} />
                <NumeroTemporada temporada={"Temparada 2"}/>
                <NumeroTemporada temporada={"Temporada 3"} />
            </div>
            <div className="tempradas__tarjetasCapitulos">
                <CarouselTarjetasCapitulos />

            </div>

        </div>
    )
}
export default Temporadas