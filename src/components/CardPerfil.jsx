// 1ª seção: importações de outros arquiuvos
import './CardPerfil.css';
//import fotoPerfil from '../assets/perfil.jpg';
import {Link} from 'react-router-dom'



// 2ª seção: o componente em si
function CardPerfil({foto,nome}){
    return(
        <Link to="/home" className='card-perfil'>
            <img className='foto-perfil' src={foto}/>
            <span className='nome-perfil'>{nome}</span>
        </Link>
    );
 
}


// 3ª seção: exportação do componente
// Permite que o componente seja importado em outros arquivos
export default CardPerfil;