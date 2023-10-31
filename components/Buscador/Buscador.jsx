import React from 'react'
import './buscador.css'
import { TextField } from '@mui/material'

const Buscador = () => {
  return (
    <div className='buscador'>
    <input className='buscador__input' placeholder='Buscar'></input>
    </div>
  )
}

export default Buscador