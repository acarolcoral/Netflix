import './BarraDeNavegacao.css';
import netflix from '../assets/netflix.svg';
import { IoPersonOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'


function BarraDeNavegacao({links}){

    return(

        <div className='header'>

            <div className='topico1'>

                <img id='logo' src={netflix}/>

                {links.map((topico, index) => (
                     <span key={index}>{topico}</span>
                ))}  

            </div>
            
            <Link to="/conta" className='conta'>
                <IoPersonOutline />
                <span>Conta</span>
            </Link>

        </div>
    );
};

export default BarraDeNavegacao;