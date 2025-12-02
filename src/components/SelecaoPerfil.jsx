// 1ª seção: importações de outros arquiuvos
import BotaoVazado from './BotaoVazado';
import CardPerfil from './CardPerfil';
import './SelecaoPerfil.css';

//import imgPerfil from '../assets/perfil.jpg'


// 2ª seção: o componente em si
function SelecaoPerfil({listaDePerfis}){

    

    return(
        <div className='Selecao-Perfil'>
            <span className='titulo'>Quem está assistindo?</span>
            <div className='Conteiner-Perfis'>
                {listaDePerfis.map(perfil => (
                    <CardPerfil foto={perfil.foto} nome={perfil.nome}/>
                ))}
              
                
            </div>
            <div className='Botao-Vazado'>
                <BotaoVazado />
            </div>
        </div>
    );

}


// 3ª seção: exportação do componente
// Permite que o componente seja importado em outros arquivos
export default SelecaoPerfil;