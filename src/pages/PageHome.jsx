import BarraDeNavegacao from '../components/BarraDeNavegacao';
import InformacoesFilmes from '../components/InformacoesFilme';
import './PageHome.css';
//Importação obrigatória para lidar com API em React
//import {useEffect, useState} from 'react';

//teste 

function PageHome(){

    let lista = [
        'Início',
        'Séries',
        'Filmes',
        'Bombando',
        'Minha Lista',
        'Navegar por idiomas'
    ];

   /* //Onde os resultados da requisição para API serão armazenados
    const [data, setData] = useState([])

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmI2YjkxYzlkZGY5ZTI3MzE4MjIzMDQyZWRhMDMxOSIsIm5iZiI6MTc2NDAwNDEwOS40MTUsInN1YiI6IjY5MjQ5MTBkOGUwMDg4YzU3MzE0ZGE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l-lFjh3tF3IIZFsUdayldOZZqDmDDdB3SK2LJY1doPQ'
        }
    };

    useEffect(()=> {
    fetch(url, options)
    .then(res => res.json())
    .then(resultadoDaRequisicao => {
        let titulosDosFilmes = resultadoDaRequisicao.results.map(filme => filme.title);
        setData(titulosDosFilmes);
    })
    .catch(err => console.error(err));
    }, [url]);
    */

    return(

        <div className="Page-home">

            <div className="Barra-Navecacao">
                <BarraDeNavegacao links = {lista}/>
            </div>
            
           <div className="informacoes">
             <InformacoesFilmes/>
           </div>
           
        </div>

       

              
    );
}

export default PageHome;


 