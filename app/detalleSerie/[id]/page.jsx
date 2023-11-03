import { buscarPelicula } from "@/app/peticionesFetch/page";
import React from "react";
import DetalleSerie from "../page";
import CarouselTarjetasCapitulos from "@/components/CarouselTarjetasCapitulos/CarouselTarjetasCapitulos";
import Temporadas from "@/components/Temporadas/Temporadas";

async function DetalleSeries({ params }) {
  let data = await buscarPelicula("tv" ,params.id);
    return (
    <>
    <DetalleSerie data={data}/>
    <Temporadas data={data} />
    </>
  );
}

export default DetalleSeries;

