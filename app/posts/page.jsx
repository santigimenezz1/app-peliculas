import React from 'react'

 async function Posteo (){
   let res = await fetch("https://api.themoviedb.org/3/narnia/157336?api_key=641eb2676131a3aa4fafc93460d6ae1f")
   let data = await res.json()  
   console.log(data)
}

async function Posts () {
  return (
    <div>
     <h1>anda</h1>
    </div>
  )
}

export default Posts
