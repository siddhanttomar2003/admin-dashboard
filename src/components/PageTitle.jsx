import React from 'react'
import './pagetitle.css';
function PageTitle({page}) {
  return (
   <div className="pagetitle">
    <h1>{page}</h1>
    <nav>
        <ul className="breadcumb">
            <li className="breadcumb-item">
             <a href="/">
             <i className="bi bi-house-door"></i>
             </a> /
            </li>
            <li className="breadcumb-item active">{page}</li>
        </ul>
    </nav>
   </div>
  )
}

export default PageTitle