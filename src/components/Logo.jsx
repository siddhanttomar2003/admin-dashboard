import React from 'react';
import './logo.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Logo() {
    const handletoggleSidebar=()=>{
        document.body.classList.toggle('toggle-sidebar');
    };
  return (

    <div className="d-flex align-items-center justify-content-between ">
        <a href="/" className="logo d-flex align-items-center" >
        {/*img*/}
        <span className="d-none d-lg-block">AdminDashboard</span>
        </a>
        <i class="bi bi-list toggle-sidebar" onClick={handletoggleSidebar}></i>
         
    </div>
  
  )
}

export default Logo;