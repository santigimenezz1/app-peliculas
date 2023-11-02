import React from 'react'

const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const endpoint = '/movie/popular';
const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;

async function fetchMovies() {
  try {
    const response = await fetch(apiUrl);
    // Verifica si la solicitud fue exitosa
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Error al recuperar datos de la API');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

async function Posts () {
  fetchMovies()
  return (
    <div>
     <h1>anda</h1>
    </div>
  )
}

export default Posts
