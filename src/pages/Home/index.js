import { useEffect, useState } from "react";
import api from '../../services/api'
import { Link } from "react-router-dom";
import './home.css'
import '@fontsource/bebas-neue';



//URL da API:/movie/now_playing?api_key=49be71d1927c0129bb4fd7fb1a090e99&language=pt-Br


function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "49be71d1927c0129bb4fd7fb1a090e99",
                    language: "pt-Br",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 15))
            setLoading(false);
        }



        loadFilmes();

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }


    return (
        <div className="cont">
            <div className="listafilmes">

                <h1>Descubra novos lançamentos</h1>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Descubra!!</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )

}

export default Home;