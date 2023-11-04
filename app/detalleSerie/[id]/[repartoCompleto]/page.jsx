import HeaderReparto from "@/components/HeaderReparto/HeaderReparto";
import '../../../detalle/[id]/[repartoCompleto]/repartoCompleto.css'
import TarjetaActor from "@/components/TarjetaActor/TarjetaActor";
import {  RepartoSerie, buscarPelicula } from "@/app/peticionesFetch/page";

async function repartoCompletoSerie({ params }) {
  let reparto = await RepartoSerie(params.id);
  let pelicula = await buscarPelicula("tv", params.id);

  return (
    <div className="repartoCompleto">
      {
        
      <HeaderReparto pelicula={pelicula} />
      }
      <div className="repartoCompletoTarjetas">
        <div className="contaier__repartoCompleto">
          <h1>Reparto</h1>
          <div className="repartoCompletoTarjetas__cast">
            {
              reparto.cast.map((actor) => (
                <TarjetaActor key={actor.cast_id} actor={actor} />
              ))}
          </div>
        </div>
        <div className="contaier__repartoCompleto">
          <h1>Equipo</h1>
          <div className="repartoCompletoTarjetas__cast">
            {
              reparto.crew.map((actor) => (
                <TarjetaActor key={actor.cast_id} actor={actor} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default repartoCompletoSerie;
