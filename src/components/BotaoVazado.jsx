// 1ª seção: importações de outros arquiuvos
import './BotaoVazado.css';



// 2ª seção: o componente em si
function BotaoVazado(){
    return(
        <div className='BotaoVazado'>
            <span className='Gerenciar-perfil'>Gerenciar perfis</span>
        </div>
    );

}


// 3ª seção: exportação do componente
// Permite que o componente seja importado em outros arquivos
export default BotaoVazado;