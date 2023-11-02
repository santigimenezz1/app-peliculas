//PELICULAS

export async function peticionPeliculaspPopulares() {
  const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
  const tmdbBaseUrl = 'https://api.themoviedb.org/3';
  const endpoint = '/movie/popular';
  const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      return(data);
    } else {
      console.error('Error al recuperar datos de la API');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}
export async function peticionPeliculasTendencia() {
  const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
  const tmdbBaseUrl = 'https://api.themoviedb.org/3';
  const endpoint = '/movie/top_rated';
  const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;

  try {
    const response = await fetch(apiUrl);
    // Verifica si la solicitud fue exitosa
    if (response.ok) {
      const data = await response.json();
      return(data);
    } else {
      console.error('Error al recuperar datos de la API');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}
export async function peticionPeliculasSeViene() {
  const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
  const tmdbBaseUrl = 'https://api.themoviedb.org/3';
  const endpoint = '/movie/upcoming';
  const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;

  try {
    const response = await fetch(apiUrl);
    // Verifica si la solicitud fue exitosa
    if (response.ok) {
      const data = await response.json();
      return(data);
    } else {
      console.error('Error al recuperar datos de la API');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}
export async function peticionPeliculasNuevas() {
  const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
  const tmdbBaseUrl = 'https://api.themoviedb.org/3';
  const endpoint = '/movie/now_playing';
  const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;

  try {
    const response = await fetch(apiUrl);
    // Verifica si la solicitud fue exitosa
    if (response.ok) {
      const data = await response.json();
      return(data);
    } else {
      console.error('Error al recuperar datos de la API');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}
export async function buscarPelicula(id) {
  const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
  const tmdbBaseUrl = 'https://api.themoviedb.org/3';
  const endpoint = 'movie';
  const apiUrl = `${tmdbBaseUrl}/${endpoint}/${id}?api_key=${apiKey}&language=es-ES`;
  

  try {
    const response = await fetch(apiUrl);
    // Verifica si la solicitud fue exitosa
    if (response.ok) {
      const data = await response.json();
      return(data);
    } else {
      console.error('Error al recuperar datos de la API');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}
export async function RepartoPelicula(id) {
  const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
  const tmdbBaseUrl = 'https://api.themoviedb.org/3';
  const endpoint = 'movie';
  const apiUrl = `${tmdbBaseUrl}/${endpoint}/${id}/credits?api_key=${apiKey}&language=es-ES`;
  

  try {
    const response = await fetch(apiUrl);
    // Verifica si la solicitud fue exitosa
    if (response.ok) {
      const data = await response.json();
      return(data);
    } else {
      console.error('Error al recuperar datos de la API');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

//-------------------------------------------------------

//SERIES

