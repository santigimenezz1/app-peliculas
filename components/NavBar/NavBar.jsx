import React from 'react'
import './navBar.css'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='navBar'>
      <Link href={'/'}>
      <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698619938/App%20peliculas/gxyakkliyxvrdhfwm5k5.png'></img>
      </Link>
      <div className='navBar__enlaces'>
       <ul>
        <li>
        <Link className='Link' href={'/'}>Home</Link> 
        </li>
        <li>
        <Link className='Link' href={'/search'}>Search</Link> 
        </li>
        <li>
        <Link className='Link' href={'/peliculas'}>Peliculas</Link> 
        </li>
        <li>
        <Link className='Link' href={'/series'}>Series</Link> 
        </li>
       </ul>
      </div>
    </div>
  )
}

export default NavBar
