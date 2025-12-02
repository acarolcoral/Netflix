import './PageSelecionarPerfil.css';
import SelecaoPerfil from '../components/SelecaoPerfil.jsx';

import fotoPerfil from '../assets/perfil.jpg';


function PageSelecionarPerfil(){

    let lista = [
        {foto: fotoPerfil, nome: 'Carolina'},
        {foto: fotoPerfil, nome: 'Iuna'},
        {foto: fotoPerfil, nome: 'Helder'},
        {foto: fotoPerfil, nome: 'Cicera'},
        {foto: fotoPerfil, nome: 'Manoel'}
     ];

    return(
        <div className='page-selecionar-perfil'>
            <SelecaoPerfil listaDePerfis={lista}/>           
        </div>         
    );
}

export default PageSelecionarPerfil;