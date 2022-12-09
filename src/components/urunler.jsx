import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Urunler() {
  return (
    <div>
       <div className='container mt-5'>
         <div className='row'>
            <div className='col-md-12'>
             <div className="alert alert-primary"  role="alert" >
               <div className="container">
                <div className="row">
                  <div className="col-md-6">
                             <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Kategori</h5>
                              <p class="card-text">Ürün</p>
                              <Link to="#" className= "btn btn-primary">Detaya git</Link>
                            </div>
                          </div>
                  </div>
                </div>
               </div>
            </div>  
        </div>
    </div>
       </div>
  </div>
  )
}

export default Urunler