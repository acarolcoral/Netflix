import BarraSuperiorConta from '../components/BarraSuperiorConta';
import MenuLateral from '../components/MenuLateral'
import DetalhesConta from '../components/DetalhesConta'
import './PageConta.css'

function PageConta(){

    return(
        <div className='page-conta'>

            <div className='cabecalho'>
                <BarraSuperiorConta/>
            </div>

            <div className='principal'>
                <div className='menu-esquerda'>
                    <MenuLateral/> 
                </div>

                <div className='conteudo'>
                    <DetalhesConta/>
                </div>

            </div>

        </div>
    );
}

export default PageConta;