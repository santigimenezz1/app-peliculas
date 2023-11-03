import Reparto from "@/app/reparto/page"
import Detalle from "../page"
import RepartoActores from "@/components/RepartoActores/RepartoActores"
import { RepartoPelicula, buscarPelicula } from "@/app/peticionesFetch/page"


async function Prueba({ params }) {
  let data = await buscarPelicula("movie" ,params.id);
  let reparto = await RepartoPelicula(params.id)
  let id = params.id

  let test= reparto.cast
  
  return (
    <>
      <Detalle data={data} />
      <RepartoActores reparto={reparto} id={id} />
    </>
  );
}

export default Prueba;

