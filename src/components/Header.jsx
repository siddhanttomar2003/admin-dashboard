import React from 'react'
import './header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav'
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header() {
  return (
   
   <>
   <header id='header' className="header fixed-top d-flex align-items-center"><Logo></Logo>
   <SearchBar></SearchBar>
    <Nav></Nav>
   </header>
   </>
  )
}

export default Header