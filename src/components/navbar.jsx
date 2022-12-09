import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
             <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/anasayfa" className='nav-link active' >anasayfa</Link> 
        </li>
        <li class="nav-item">
        <Link to="/hakkimizda" className='nav-link' >hakkimizda</Link>
        </li>
        <li class="nav-item">
        <Link to="/urunler" className='nav-link' >urunler</Link>
        </li>
        <li class="nav-item">
        <Link to="/iletisim" className='nav-link' >iletisim</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar