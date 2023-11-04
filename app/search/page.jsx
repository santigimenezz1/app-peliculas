"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Search } from '@/app/peticionesFetch/page';
import TarjetaSerie from '@/components/TarjetaSerie/TarjetaSerie';
import '../search/buscar.css'
import Link from 'next/link';

const Buscar = ( ) => {
  const [estado, setEstado] = useState([])
  const formik = useFormik({
    initialValues: {
      nombre: '',
    },
    onSubmit: async function (values)  {
      let peticion =  await Search(values.nombre)
      let result = await peticion.results
      setEstado(result)
    },
    validateOnChange: false,
  });


  return (
    <div className='buscador'>
      <form onSubmit={formik.handleSubmit}>
        <input 
        className='buscador__input'
          onChange={formik.handleChange}
          name='nombre'
          placeholder='Buscar'
          value={formik.values.nombre}
        />
        <button className='buscador__boton' type='submit'>Buscar</button>
      </form>
      <div className='buscar__tarjetas'>

      {
  estado.length > 0 ? (
    estado.map((pelicula) => {
      if (pelicula.media_type === "movie") {
        return (
          <Link key={pelicula.id} href={`/detalle/${pelicula.id}`}>
            <TarjetaSerie movie={pelicula} />
          </Link>
        );
      }else{
        return (
          <Link key={pelicula.id} href={`/detalleSerie/${pelicula.id}`}>
            <TarjetaSerie movie={pelicula} />
          </Link>
        )
      }
    })
  ) : (
    <h1 className='titulo__sinBusqueda'>Buscá tu película o serie preferida 😀</h1>
  )
}
      </div>
    </div>
    )
};

export default Buscar;
