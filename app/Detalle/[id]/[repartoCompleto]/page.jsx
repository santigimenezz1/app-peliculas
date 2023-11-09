import HeaderReparto from "@/components/HeaderReparto/HeaderReparto";
import '../[repartoCompleto]/repartoCompleto.css';
import TarjetaActor from "@/components/TarjetaActor/TarjetaActor";
import { RepartoPelicula, buscarPelicula } from "@/app/peticionesFetch/page";
import Link from "next/link";
import LoadingRepartoCompleto from "./loading";

async function repartoCompleto({ params }) {
  let reparto, pelicula;

  try {
    const idPelicula = params.id;
    reparto = await RepartoPelicula(params.id);
    pelicula = await buscarPelicula("movie", params.id);

    if (!reparto || !reparto.cast || !reparto.crew) {
      throw new Error("Los datos de reparto no están disponibles.");
    }
  } catch (error) {
    // Manejar errores de la solicitud
    console.error("Error en la solicitud de datos:", error);

    return (
      <>
        <div>Error al cargar los datos.</div>
      </>
    );  
  }

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
              {reparto.cast.map((actor) => (
                <Link key={actor.id} style={{ textDecoration: "none" }} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                  <TarjetaActor key={actor.cast_id || actor.id} actor={actor} />
                </Link>
              ))}
            </div>
          </div>
          <div className="contaier__repartoCompleto">
            <h1>Equipo</h1>
            <div className="repartoCompletoTarjetas__cast">
              {reparto.crew.map((actor) => (
                <Link key={actor.id} style={{ textDecoration: "none" }} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                  <TarjetaActor key={actor.crew_id || actor.id} actor={actor} />
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
