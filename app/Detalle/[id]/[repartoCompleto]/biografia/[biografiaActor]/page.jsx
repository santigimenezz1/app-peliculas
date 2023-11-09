"use client"
import './biografia.css'
import { peticionPersonaBiografia, peticionTrabajosActor } from '@/app/peticionesFetch/page'
import Link from 'next/link'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import TarjetaBiografia from '@/components/TarjetaBiografia/TarjetaBiografia'

async function Biografia ( {params} ){
    let idActor = await params.biografiaActor
    let peticionActor = await peticionPersonaBiografia(idActor)
    let trabajosBiografia = await peticionTrabajosActor(idActor)

    let urlImagen = "";

    if (peticionActor.profile_path) {
        urlImagen = `https://image.tmdb.org/t/p/original/${peticionActor.profile_path}`;
      }else{
        urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699562010/App%20peliculas/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093_r2tucp.png"
      }     return (
        <>
        <Link href={'/'}>
        <BotonVolver />
        </Link>
        <div className="biografia">
                <img src={urlImagen}></img>
                <div className="boigrafia__info">
                    <h1>{peticionActor.name}</h1>
                    <div className='biografia__info__biografia'>
                        <h2>Biografia</h2>
                        <span>{peticionActor.biography}</span>
                    </div>
                    <div className='biografia__info__infoPersonal'>
                            <h1>Informacion personal</h1>
                             <h2>Departamento: {peticionActor.known_for_department}</h2>
                             <h2>Fecha de nacimiento: {peticionActor.birthday}</h2>
                             <h2>Lugar de nacimiento: {peticionActor.place_of_birth}</h2>
                        </div>
                    <div className='biografia__info__trabajos'>
                        <h1>Conocido por:</h1>
                        <div style={{display:"flex", gap:"10px"}}>
                            {
                                trabajosBiografia.cast.slice(0,6).map((trabajo, index)=>(
                                    <TarjetaBiografia key={index}  trabajo={trabajo}  />

                                ))
                            }
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Biografia