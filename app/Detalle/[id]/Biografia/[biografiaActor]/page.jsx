import TarjetaBiografia from '@/components/TarjetaBiografia/TarjetaBiografia'
import '../[biografiaActor]/biografiaActor.css'
const Biografia = ()=>{
    return (
        <div className="biografia">
                <img src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698979355/App%20peliculas/8Ac9uuoYwZoYVAIJfRLzzLsGGJn_kwkv81.jpg"></img>
                <div className="boigrafia__info">
                    <h1>Nombre del actor</h1>
                    <div className='biografia__info__biografia'>
                        <h2>Biografia</h2>
                        <span>Aaron Paul es un actor y productor estadounidense. Nació el 27 de agosto de 1979 en Emmett, Idaho. Cuenta con una carrera de más de 20 años entre cine y televisión. Su papel más conocido es el de Jesse Pinkman en la exitosa serie 'Breaking Bad', con la que consiguió grandes hitos como el premio a mejor actor de reparto en los Emmys.
                         Sus primeras escenas en la televisión fueron en 1998 en series como 'Even the Losers' o 'Locust Valley', en las que se encargaría de papeles secundarios y de poco peso en la trama. En 1999 aparecería en una de las series más conocidas de esa década: 'Beverly Hills, 90210', aunque no tuvo un rol protagonista. No sería la única ocasión en la que tuviera un papel en una serie icónica. Ese mismo año también salió en un episodio de 'Melrose Place'. Durante 1999 coleccionó apariciones en diferentes capítulos de muchas series como 'Suddenly Susan' o '3rd Rock from the Sun'.</span>
                    </div>
                    <div className='biografia__info__trabajos'>
                        <h1>Conocido por:</h1>
                        <div style={{display:"flex", gap:"10px"}}>
                        <TarjetaBiografia />
                        <TarjetaBiografia />
                        <TarjetaBiografia />
                        <TarjetaBiografia />
                        <TarjetaBiografia />
                        </div>


                    </div>
            </div>
        </div>
    )
}
export default Biografia