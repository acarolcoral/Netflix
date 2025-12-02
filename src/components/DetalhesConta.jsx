// 1ª seção: importações de outros arquiuvos
import './DetalhesConta.css';

import { FaCcMastercard } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


// 2ª seção: o componente em si
function DetalhesConta(){
    return(
        <div className='DetalhesConta'>
            <div>
                <span className='Conta'>Conta</span>
            </div>
            <div>
                <span className='Detalhes'>Detalhes da assinatura</span>
            </div>
            <div className='Gerenciamento'>
                <span className='Assinante'>Assinante desde julho de 2025</span>
                <span className='Plano'>Plano padrao</span>
                <span className='Proximo'>Próximo pagamento: 31 de janeiro de 2025</span>
                <div className='Gerenciamento-2'>
                    <FaCcMastercard />
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>2777</span>
                </div>
                <div className='Gerenciamento-3'>
                    <span>Gerenciar assinatura</span>
                    <IoIosArrowForward />


                </div>
            </div>


        </div>
        
    );

}


// 3ª seção: exportação do componente
// Permite que o componente seja importado em outros arquivos
export default DetalhesConta;