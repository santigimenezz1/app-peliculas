"use client"
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import '../Buscador/buscador.css'
import { Search, buscarPelicula } from '@/app/peticionesFetch/page';



const Buscador = () => {
const [estado, setEstado] = useState("")
  const formik = useFormik({
    initialValues: {
      nombre: '',
    },
    onSubmit: (values) => {
     const peticion = Search(values.nombre)
      setEstado(peticion)
    },
    validateOnChange: false,
  });


  console.log(estado)
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
    </div>
  );
};

export default Buscador;
