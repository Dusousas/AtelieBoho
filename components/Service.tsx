import React, { useState } from 'react';

export default function Service() {
    const [activeService, setActiveService] = useState<string | null>(null);

    const toggleList = (service: string) => {
        // Alterna entre expandir e colapsar a lista correspondente
        setActiveService(prev => (prev === service ? null : service));
    };

    return (
        <section id="services" className="customH py-20 linear">
            <h2 className="text-center text-2xl font-normal">Nossos Principais</h2>
            <h1 className="text-center text-4xl text-Primary">Serviços</h1>
            <div className="flex flex-wrap justify-center pt-14 gap-4">
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
                                <li>- Maquiagem</li>
                                <li>- Penteado</li>
                                <li>- Cuidados com a pele</li>
                                <li>- Manicure e pedicure</li>
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
                                <li>- Maquiagem para eventos</li>
                                <li>- Maquiagem para fotos</li>
                                <li>- Dicas de cuidados de pele</li>
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
                                <li>- Design de sobrancelhas</li>
                                <li>- Henna</li>
                                <li>- Correção de falhas</li>
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
                    {/* Luzes */}
                    <article className="max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg">
                        <h1 className="text-[#cca686] text-lg">Luzes</h1>
                        <p className="text-sm mt-4">
                            Técnica de coloração que ilumina e dá profundidade ao cabelo, criando um visual natural e sofisticado.
                        </p>
                        <button
                            className="text-[#cca686] mt-2"
                            onClick={() => toggleList('luzes')}
                        >
                            {activeService === 'luzes' ? 'Ver menos' : 'Ver mais'}
                        </button>
                        {activeService === 'luzes' && (
                            <ul className="mt-2 text-left">
                                <li>- Luzes californianas</li>
                                <li>- Luzes em mechas</li>
                                <li>- Balayage</li>
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
            </div>
        </section>
    );
}
