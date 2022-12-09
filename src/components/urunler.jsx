import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

const veri=[
  {id:0,
   kategori:"anakart",
   urun:"msı",
  fiyat:100,
  aciklama:"3 adet ddr5 bulunmaktadır"
  },
  {id:1,
    kategori:"harddisk",
    urun:"western digital",
   fiyat:100,
   aciklama:"500gb depolama alanı"
   },
   {id:2,
    kategori:"SSD",
    urun:"sandisk",
   fiyat:100,
   aciklama:"okuma yazma hızı yüksek"
   }
];




function Urunler() {
  
  const location = useLocation();
  
  return (
    
    <div>
   
       <div className='container mt-5'>
         <div className='row'>
            <div className='col-md-12'>
             <div className="alert alert-primary"  role="alert" >
               <div className="container">
                <div className="row">
                  
                  {veri.map((linkler)=>{
                    const id=linkler.id
                    return(
                      <div className='col-md-6'>
                     <div class="card" >
                     <div class="card-body">
                       <h5 class="card-title">{`${linkler.kategori}`}</h5>
                       <p class="card-text">{`${linkler.kategori}`}</p>
                       <Link to={`${location.pathname}/${id}`} className='btn btn-primary'>Detaylara git</Link>
                     </div>
                   </div>
                   </div>
                   )
                  })}           
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


