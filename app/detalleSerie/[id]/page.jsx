import { RepartoSerie, buscarPelicula } from "@/app/peticionesFetch/page";
import React from "react";
import DetalleSerie from "../page";
import CarouselTarjetasCapitulos from "@/components/CarouselTarjetasCapitulos/CarouselTarjetasCapitulos";
import Temporadas from "@/components/Temporadas/Temporadas";
import RepartoActoresSerie from "@/components/RepartoActoresSerie/RepartoActoresSerie";
import LoadingRepartoDetalleSerie from "./loading";

async function DetalleSeries({ params }) {
  let data = await buscarPelicula("tv" ,params.id);
  let reparto = await RepartoSerie(params.id);


    return (
    <div>
    <DetalleSerie data={data}/>
    <Temporadas data={data} />
    <RepartoActoresSerie reparto={reparto} id={params.id} data={data} />

    </div>
  );
}

export default DetalleSeries;

