// 1ª seção: importações de outros arquiuvos
import './DetalhesConta.css';

import { FaCcMastercard } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


// 2ª seção: o componente em si
function DetalhesConta(){
    return(
        <div className='DetalhesConta'>
            <div className="conta_titulo">
                <span id="conta">Conta</span>
                <span id="detalhes">Detalhes da assinatura</span>
            </div>

            <div className='Gerenciamento'>
                <span id='Assinante'>Assinante desde julho de 2025</span>

                <div className="plano">
                    <span id='tipo-Plano'>Plano padrao</span>
                    <span id='data-pagamento'>Próximo pagamento: 31 de janeiro de 2025</span>
                    <div className='Cartao'>
                        <FaCcMastercard />
                        <span id="num-cartao">#### #### #### 6307</span>
                    </div>
                </div>
                
                <div className='Gerenciar-assinatura'>
                    <span id="gerenciar">Gerenciar assinatura</span>
                    <IoIosArrowForward />
                </div>

            </div> 

        </div>
        
    );

}


// 3ª seção: exportação do componente
// Permite que o componente seja importado em outros arquivos
export default DetalhesConta;