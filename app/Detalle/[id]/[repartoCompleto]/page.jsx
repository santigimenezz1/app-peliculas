import HeaderReparto from "@/components/HeaderReparto/HeaderReparto";
import '../[repartoCompleto]/repartoCompleto.css';
import TarjetaActor from "@/components/TarjetaActor/TarjetaActor";
import { RepartoPelicula, buscarPelicula } from "@/app/peticionesFetch/page";
import Link from "next/link";
import LoadingRepartoCompleto from "./loading";

async function repartoCompleto({ params }) {
  let idPelicula = await params.id
  let reparto = await RepartoPelicula(params.id);
  let pelicula = await buscarPelicula("movie", params.id);

 

  return (
    <>
    <div className="repartoCompleto">
      <div>
      <HeaderReparto idPelicula={idPelicula} pelicula={pelicula} />
      </div>
      
      <div className="repartoCompletoTarjetas">
        <div className="contaier__repartoCompleto">
          <h1>Reparto</h1>
          <div className="repartoCompletoTarjetas__cast">
            {
              reparto.cast.map((actor) => (
                <Link style={{textDecoration:"none"}} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                <TarjetaActor key={actor.cast_id} actor={actor} />
                </Link>
              ))}
          </div>
        </div>
        <div className="contaier__repartoCompleto">
          <h1>Equipo</h1>
          <div className="repartoCompletoTarjetas__cast">
            {
              reparto.crew.map((actor) => (
                <Link style={{textDecoration:"none"}} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                <TarjetaActor key={actor.crew_id} actor={actor} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default repartoCompleto;
