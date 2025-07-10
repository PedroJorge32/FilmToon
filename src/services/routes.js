import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import Filme from '../pages/Filme';
import Favorits from '../pages/Favorits';


import Err from '../pages/Err';
import './router.css'

import Header from '../components/Header/index';
import Footer from '../components/Footer';

function RouteApp(){
  
 return(
   
   <BrowserRouter>
    
    <div className='Layoutgeral'> 
      <Header/>
      
      <main className='conteudo'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/filme/:id' element={<Filme/>} />
        <Route path='/favoritos' element={<Favorits/>} />


        <Route path='*' element={<Err/>} />

      </Routes>
      </main>
      
      <Footer/>


    </div>  
   
   </BrowserRouter>


 )

}

export default RouteApp;