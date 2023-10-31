import React from 'react'

const layout = ( {children} ) => {
  return (
    <div style={{border:"1px solid red"}}>
      <nav>
        <ul>
            <li style={{color:"white"}}>enlace 1 </li>
            <li style={{color:"white"}}>enlace 2 </li>
            <li style={{color:"white"}}>enlace 3 </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default layout
