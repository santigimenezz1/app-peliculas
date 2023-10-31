import React from 'react'
import TarjetaPelicula from '../../components/TarjetaPelicula/TarjetaPelicula'
import TarjetaFiltrado from '@/components/TarjetaFiltrado/TarjetaFiltrado'
import Link from 'next/link'

function Peliculas() {
  return (
    <div>
      <TarjetaPelicula />
      <Link href={'/peliculas/drama'}>
      <TarjetaFiltrado text={"Drama"} />
      </Link>
    </div>
  )
}

export default Peliculas
