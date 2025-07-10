import './header.css'
import { Link } from 'react-router-dom';
import logo from '../../services/images/sem fundo.png';



function Header(){
  return(
  
  <header>
    <Link className='logo' to='/' > <img className='imgLogo' src={logo} alt='file'/> </Link>

    <Link to='/favoritos' className='myfilms'>Minha Lista</Link>
  
  

 </header>

  )



}


export default Header;