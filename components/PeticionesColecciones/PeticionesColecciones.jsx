const { default: CarouselTarjetasSerie } = require("../CarouselTarjetasSerie/CarouselTarjetasSerie")
const { default: TarjetaSerie } = require("../TarjetaSerie/TarjetaSerie")

const PeticionesColecciones = ({ name, disney, coleccionCars, coleccionMonster, coleccionToyStorie, national, starWars, coleccionVengadores, coleccionHulk, coleccionIronMan, coleccionSpiderman, coleccionCapitan, coleccionGuardianes }) => {
    return (
        <div class="colecciones">
      <div className={name === "marvel" ? "colecciones__background" : `colecciones__background${`${name}`}`}></div>
            <div className="colecciones__tarjetas">
                {
                    name === "marvel" &&
                    <>
                        <CarouselTarjetasSerie data={coleccionSpiderman} />
                        <CarouselTarjetasSerie data={coleccionGuardianes} />
                        <CarouselTarjetasSerie data={coleccionCapitan} />
                        <CarouselTarjetasSerie data={coleccionIronMan} />
                        <CarouselTarjetasSerie data={coleccionHulk} />
                        <CarouselTarjetasSerie data={coleccionVengadores} />
                    </>
                }

                {
                    name === "pixar" &&
                    <>
                        <CarouselTarjetasSerie data={coleccionToyStorie} />
                        <CarouselTarjetasSerie data={coleccionMonster} />
                        <CarouselTarjetasSerie data={coleccionCars} />

                    </>
                }
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                    {
                        name === "starWars" &&
                        starWars.results.map((pelicula) => (
                            <TarjetaSerie key={pelicula.id} movie={pelicula} />
                        ))
                    }
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                    {
                        name === "national" &&
                        national.results.map((pelicula) => (
                            <TarjetaSerie key={pelicula.id} movie={pelicula} />
                        ))
                    }
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
                    {
                        name === "disney" &&
                        disney.results.map((pelicula) => (
                            <TarjetaSerie key={pelicula.id} movie={pelicula} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PeticionesColecciones