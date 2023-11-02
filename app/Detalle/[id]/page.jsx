import Reparto from "@/app/reparto/page"
import Detalle from "../page"
import RepartoActores from "@/components/RepartoActores/RepartoActores"
import { RepartoPelicula, buscarPelicula } from "@/app/peticionesFetch/page"


async function Prueba({ params }) {
  // Accede al valor de params.id en lugar de id
  let data = await buscarPelicula(params.id);
  let reparto = await RepartoPelicula(params.id)
  let id = params.id
  
  return (
    <>
      <Detalle data={data} />
      <RepartoActores reparto={reparto} id={id} />
    </>
  );
}

export default Prueba;

