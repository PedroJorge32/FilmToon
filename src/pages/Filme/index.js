import { use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../services/api';
import './detalhe.css'
import '@fontsource/bebas-neue';
import { toast } from "react-toastify";



function Filme() {
  const { id } = useParams();
  const navi = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function AllFilms() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "49be71d1927c0129bb4fd7fb1a090e99",
          language: "pt-Br",

        }
      })

        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })

        .catch(() => {
          console.log("Filme not found")
          navi("/", { replace: true })
        })
    }

    AllFilms();

    return () => {
      console.log("Componente Desmontado")
    }

  }, [navi, id])


  function savefilme() {
   const minhalista = localStorage.getItem("@prime");

   let filmesalvos = JSON.parse(minhalista) || [];

   const jasalvo = filmesalvos.some((filmesalvos) => filmesalvos.id === filme.id);

   if(jasalvo){
    toast.warn("Esse filme já está na sua lista!")
    
    return;
   }

   filmesalvos.push(filme);
   localStorage.setItem("@prime", JSON.stringify(filmesalvos));
   toast.success("Filme salvo")

  }


  if (loading) {
    return (
      <div className="loading-det">
        <h2>Procurando Detalhes...</h2>
      </div>
    )
  }


  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}></img>


      <div className="Quack">
        <p>Sinopse:</p>
        <span className="span">{filme.overview}</span>
        <strong>Avaliação: {filme.vote_average} / 10</strong>
      </div>

      <div className="buto">
        <button className="b1" onClick={savefilme}>Salvar</button>
        <button className="b2">
          <a target="blanck" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
            Assista ao Trailer
          </a>
        </button>

      </div>



    </div>
  )

}

export default Filme;