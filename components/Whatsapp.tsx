import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export default function Whatsapp() {
    return (
        <>
            <div className="whatsapp">
                <a href="https://wa.me/5514910057531?text=Olá,%20visitei%20o%20site%20Boho%20Atelie%20e%20fiquei%20interessado(a)%20nos%20seus%20serviços.%20Gostaria%20de%20agendar%20um%20horário%20para%20conhecer%20mais%20de%20perto%20o%20trabalho%20de%20vocês." target="_blank">
                    <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                </a>
            </div>
        </>
    )
}