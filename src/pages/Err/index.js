
import { Link } from "react-router-dom";
import './404.css'


function Err(){
 return(
<div  className="not-found">
    <h1 className="num">404</h1> 
    <h2 className="text">Pagina não encontrada!</h2>
    <Link className='link' to="/">Veja todos os filmes aqui</Link>

    </div>
 )

}

export default Err;