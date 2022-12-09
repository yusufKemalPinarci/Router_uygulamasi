import Navbar from './components/navbar'
import './App.css';
import Hakkimizda from './components/Hakkimizda'
import Iletisim from './components/iletisim'
import Urunler from './components/urunler'
import {Link,Route,Routes,useParams} from 'react-router-dom'
import Anasayfa from './components/anasayfa';
import {BrowserRouter as Router} from 'react-router-dom'

 <Link  to="/anasayfa" className="nav-link active">anasayfa</Link>
function App() {
  return (
    <Router>
    <div className="App">

      <Navbar></Navbar>

       <Routes>
       <Route path="/anasayfa" element={<Anasayfa />}/>
          <Route path="/hakkimizda" element={<Hakkimizda/>} />
          <Route path="urunler" element={<Urunler />} />  
          <Route path='iletisim' element={<Iletisim />} />
      </Routes> 
         <div className='container'>
      <div className='col-md-12'>
        <div class="alert alert-primary" role="alert">
            <Routes>
            <Route path=":id" element={<Child />} />
            </Routes>          

        </div>
        </div>
        </div>    

    </div>
    </Router>

);
}


function Child(){
let { id } =useParams()
return (<div>
  <h3>id:{id}</h3>
  </div>)

}

export default App;
