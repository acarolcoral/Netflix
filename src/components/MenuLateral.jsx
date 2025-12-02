import './MenuLateral.css';

import { FaArrowLeftLong } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { GoCreditCard } from "react-icons/go";
import { GoShieldCheck } from "react-icons/go";
import { MdImportantDevices } from "react-icons/md";
import { PiLegoSmileyThin } from "react-icons/pi";


function MenuLateral() {
    return (
        <div className='icones'>

            <div className='icone-topo'>
                <FaArrowLeftLong className='icone'/>
                <span>Voltar à Netflix</span>
            </div>

            <div>
                <div className='icones-do-meio'>
                    <GoHomeFill className='icone'/>
                    <span >Visão Geral</span>
                </div>
                <div className='icones-do-meio'>
                    <GoCreditCard className='icone'/>
                    <span>Assinatura</span>
                </div>
                <div className='icones-do-meio'>
                    <GoShieldCheck className='icone'/>
                    <span>Segurança</span>
                </div>
                <div className='icones-do-meio'>
                    <MdImportantDevices className='icone'/>
                    <span>Aparelhos</span>
                </div>
                <div className='icones-do-meio'>
                    <PiLegoSmileyThin className='icone'/>
                    <span> Perfis</span>
                </div>
            </div>

        </div>
    );
};

export default MenuLateral;