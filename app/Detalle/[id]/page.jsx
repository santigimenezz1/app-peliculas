import Reparto from "@/app/reparto/page"
import Detalle from "../page"
import RepartoActores from "@/components/RepartoActores/RepartoActores"
import { RepartoPelicula, buscarPelicula } from "@/app/peticionesFetch/page"
import LoadingReparto from "./loading";



async function Prueba({ params }) {
  let data = await buscarPelicula("movie" ,params.id);
  let reparto = await RepartoPelicula(params.id)
  let id = params.id
  let test= reparto.cast


  console.log({data})
  return (
    <>
      < Detalle data={data} />
      <RepartoActores reparto={reparto} id={id} data={data} />
    </>
  );
}

export default Prueba;

