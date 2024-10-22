import React, { useState } from 'react';

export default function Cards() {
    const [activeService, setActiveService] = useState<string | null>(null);

    const toggleList = (service: string) => {
        // Alterna entre expandir e colapsar a lista correspondente
        setActiveService(prev => (prev === service ? null : service));
    };
    return (
        <>

            {/* Contêiner para cada artigo */}
            <div className="flex flex-col items-center">
                {/* Dia de noiva */}
                <article className="max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg">
                    <h1 className="text-[#cca686] text-lg">Dia de noiva</h1>
                    <p className="text-sm mt-4">
                        Pacote completo de maquiagem, penteado, cuidados com a pele e unhas, para um dia especial inesquecível.
                    </p>
                    <button
                        className="text-[#cca686] mt-2"
                        onClick={() => toggleList('diaDeNoiva')}
                    >
                        {activeService === 'diaDeNoiva' ? 'Ver menos' : 'Ver mais'}
                    </button>
                    {activeService === 'diaDeNoiva' && (
                        <ul className="mt-2 text-left">
                            <li>- Pacotes personalizados, para maiores informações entrar em contato.</li>

                        </ul>
                    )}
                    <a
                        className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                        href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20DIA%20DE%20NOIVA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar horário
                    </a>
                </article>
            </div>

            {/* Contêiner para cada artigo */}
            <div className="flex flex-col items-center">
                {/* Maquiagem */}
                <article className="max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg">
                    <h1 className="text-[#cca686] text-lg">Maquiagem</h1>
                    <p className="text-sm mt-4">
                        Maquiagem profissional personalizada, realçando sua beleza natural com produtos de alta qualidade e longa duração.
                    </p>
                    <button
                        className="text-[#cca686] mt-2"
                        onClick={() => toggleList('maquiagem')}
                    >
                        {activeService === 'maquiagem' ? 'Ver menos' : 'Ver mais'}
                    </button>
                    {activeService === 'maquiagem' && (
                        <ul className="mt-2 text-left">
                            <li>- Maquiagem para eventos.</li>
                            <li>- Maquiagem para fotos.</li>
                            <li>- Dicas de cuidados de pele.</li>
                        </ul>
                    )}
                    <a
                        className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                        href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20MAQUIAGEM"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar horário
                    </a>
                </article>
            </div>

            {/* Contêiner para cada artigo */}
            <div className="flex flex-col items-center">
                {/* Sobrancelhas */}
                <article className="max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg">
                    <h1 className="text-[#cca686] text-lg">Sobrancelhas</h1>
                    <p className="text-sm mt-4">
                        Modelagem personalizada para realçar a beleza natural, proporcionando um olhar mais expressivo e harmonioso.
                    </p>
                    <button
                        className="text-[#cca686] mt-2"
                        onClick={() => toggleList('sobrancelhas')}
                    >
                        {activeService === 'sobrancelhas' ? 'Ver menos' : 'Ver mais'}
                    </button>
                    {activeService === 'sobrancelhas' && (
                        <ul className="mt-2 text-left">
                            <li>- Design de sobrancelhas.</li>
                            <li>- Desing com aplicação de coloração ou Henna.</li>
                            <li>- Brow Lamination.</li>
                        </ul>
                    )}
                    <a
                        className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                        href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20SOBRANCELHAS"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar horário
                    </a>
                </article>
            </div>

            {/* Contêiner para cada artigo */}
            <div className="flex flex-col items-center">
                {/* Cabelos */}
                <article className="max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg">
                    <h1 className="text-[#cca686] text-lg">Cabelos</h1>
                    <p className="text-sm mt-4">
                        Técnica de coloração que ilumina e dá profundidade ao cabelo, criando um visual natural e sofisticado.
                    </p>
                    <button
                        className="text-[#cca686] mt-2"
                        onClick={() => toggleList('cabelos')}
                    >
                        {activeService === 'cabelos' ? 'Ver menos' : 'Ver mais'}
                    </button>
                    {activeService === 'cabelos' && (
                        <ul className="mt-2 text-left">
                            <li>- Coloração</li>
                            <li>- Corte</li>
                            <li>- Tratamento</li>
                            <li>- Mechas</li>
                            <li>- Penteados</li>
                            <li>- Dicas de cabelo</li>
                        </ul>
                    )}
                    <a
                        className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                        href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20LUZES"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar horário
                    </a>
                </article>
            </div>

            {/* Contêiner para cada artigo */}
            <div className="flex flex-col items-center">
                {/* Manicure */}
                <article className="max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg">
                    <h1 className="text-[#cca686] text-lg">Manicure</h1>
                    <p className="text-sm mt-4">
                        Técnica de coloração que ilumina e dá profundidade ao cabelo, criando um visual natural e sofisticado.
                    </p>
                    <button
                        className="text-[#cca686] mt-2"
                        onClick={() => toggleList('manicure')}
                    >
                        {activeService === 'manicure' ? 'Ver menos' : 'Ver mais'}
                    </button>
                    {activeService === 'manicure' && (
                        <ul className="mt-2 text-left">
                            <li>- Mão e pé tradicional. </li>
                            <li>- Spa dos pés (detalhes via whatsapp). </li>
                        </ul>
                    )}
                    <a
                        className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                        href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20LUZES"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar horário
                    </a>
                </article>
            </div>

            {/* Contêiner para cada artigo */}
            <div className="flex flex-col items-center">
                {/* Depilação */}
                <article className="max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg">
                    <h1 className="text-[#cca686] text-lg">Depilação</h1>
                    <p className="text-sm mt-4">
                        Técnica de coloração que ilumina e dá profundidade ao cabelo, criando um visual natural e sofisticado.
                    </p>
                    <button
                        className="text-[#cca686] mt-2"
                        onClick={() => toggleList('depilacao')}
                    >
                        {activeService === 'depilacao' ? 'Ver menos' : 'Ver mais'}
                    </button>
                    {activeService === 'depilacao' && (
                        <ul className="mt-2 text-left">
                            <li>- Depilação a cera no método espanhol e hidrossolúvel.</li>
                            <li>- Depilação egípcia (linha).</li>
                        </ul>
                    )}
                    <a
                        className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                        href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20LUZES"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar horário
                    </a>
                </article>
            </div>

        </>
    );
}