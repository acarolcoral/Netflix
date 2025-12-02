// 1ª seção: importações de outros arquiuvos
import './BarraSuperiorConta.css';
import fotoPerfil from '../assets/perfil.jpg'; 
import netflix from '../assets/netflix.svg';
import { IoIosArrowDown } from "react-icons/io";


// 2ª seção: o componente em si
function BarraSuperiorConta(){
    return(
        <div className='BarraSuperiorConta'>
            <img className='Logo' src={netflix}/>
            <div className='BarraSuperiorConta-2'>
                <img className='Perfil' src={fotoPerfil}/>
                <IoIosArrowDown />
            </div>
        </div>
    );

}


// 3ª seção: exportação do componente
// Permite que o componente seja importado em outros arquivos
export default BarraSuperiorConta;