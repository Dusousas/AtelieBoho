import React from 'react';

export default function Depoimentos() {
    return (
        <>
            <section id="contact" className="bg-[#F9ECE1] customH py-10">
                <div className="maxWidth">
                <h1 className="text-center text-6xl font-Dancing text-Primary pb-10">Depoimentos</h1>
                    <div className="flex flex-wrap gap-4 justify-center ">
                        <article className="bg-[#FBF2EA] py-4 px-6 rounded-lg mt-8 md:w-1/2 max-w-[500px]">
                            <p>"Local agradável, profissionais ótimos, produtos de excelente qualidade! Super recomendo, salão maravilhoso."</p>
                            <div className="flex items-center gap-4 mt-6">
                                <img src="/depo01.png" alt="" />
                                <h3>Ana Laura</h3>
                            </div>
                        </article>

                        <article className="bg-[#FBF2EA] py-4 px-6 rounded-lg mt-8 md:w-1/2 max-w-[500px]">
                            <p>"Experiência incrível! O atendimento foi impecável, desde a recepção até o final do meu tratamento. Os profissionais são super atenciosos e qualificados, me deixando super à vontade. O ambiente é limpo, bem organizado e muito relaxante. Saí de lá completamente renovada! Super recomendo e com certeza voltarei mais vezes."</p>
                            <div className="flex items-center gap-4 mt-6">
                                <img src="/depo02.png" alt="" />
                                <h3>Maria Julia</h3>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}