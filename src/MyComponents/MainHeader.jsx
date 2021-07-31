import React from 'react'
import { Link } from 'react-router-dom'

export const MainHeader = () => {
    return (
        <div>
           <nav>
               <h2>Main header </h2>
               <ul>
                   <li>
                      <Link to="/welcome"> Welcome </Link>
                   </li>
                   <li>
                   <Link to="/product"> Product </Link>
                   </li>
                   <li>
                   <Link to="/productdetails"> Product Details </Link>
                   </li>
               </ul>
           </nav>
        </div>
    )
}