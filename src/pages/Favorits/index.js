
import { use, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Fav.css"
import '@fontsource/bebas-neue';
import { toast } from "react-toastify";



function Favorits() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const mylist = localStorage.getItem("@prime")
        setFilmes(JSON.parse(mylist) || [])

    }, [])

    function excluir(id){
       let filtroFilmes = filmes.filter((item)=>{
         return(item.id !== id)
       })

       setFilmes(filtroFilmes);
       localStorage.setItem("@prime",JSON.stringify(filtroFilmes) )
       toast.success("Filme removido")

       

    }

    return (
        <div className="PageSalvos">
            <h1> Seus filmes salvos!</h1>

            {filmes.length === 0 && <span>Você não posui nenhum filme salvo...</span>}


            <ul>
                {filmes.map((item) => {
                    return (

                        <li className="Ali" key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}></img>
                            <Link to={`/filme/${item.id}`}>{item.title}</Link>
                            <div className="thebut" >
                               
                               
                               <button onClick={()=>excluir(item.id)}>Excluir</button>

                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )

}


export default Favorits;