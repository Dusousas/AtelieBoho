import React from 'react';

export default function Bride() {
    return (
        <>
            <section id='bride' className='customH py-20 bgBride'>
                <div className='maxWidth'>
                    <h2 className="text-center text-2xl font-normal">Noivas produzidas por</h2>
                    <h1 className="text-center text-4xl text-Primary pb-10">Tetê Ferrari</h1>


                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                        {/* Imagem 1 */}
                        <div className="lg:col-start-1 lg:row-start-3 max-h-[300px]">
                            <img className='object-cover object-top w-full h-full ' src="Noiva1.jpeg" alt="Noiva 1" />
                        </div>

                        {/* Imagem 4 */}
                        <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1 max-h-[614px]">
                            <img className='object-cover w-full h-full ' src="Noiva4.jpeg" alt="Noiva 4" />
                        </div>

                        {/* Imagem 3 */}
                        <div className="lg:col-start-3 lg:row-start-1 max-h-[300px]">
                            <img className='object-cover object-center w-full h-full ' src="Noiva3.jpg" alt="Noiva 3" />
                        </div>

                        {/* Imagem 2 */}
                        <div className="lg:row-span-2 lg:col-start-1 lg:row-start-1">
                            <img className='object-cover w-full h-full' src="Noiva2.jpeg" alt="Noiva 2" />
                        </div>

                        {/* Imagem 5 */}
                        <div className="lg:col-start-2 lg:row-start-3 max-h-[300px]">
                            <img className='object-cover w-full h-full ' src="Noiva5.jpg" alt="Noiva 5" />
                        </div>

                        {/* Imagem 6 */}
                        <div className="lg:row-span-2 lg:col-start-3 lg:row-start-2 max-h-[614px]">
                            <img className='object-cover object-top w-full h-full ' src="Noiva6.jpg" alt="Noiva 6" />
                        </div>
                    </div>

                    <div className='mx-auto text-center mt-12'>
                        <a href='https://wa.me/5514910057531?text=Olá,%20estou%20prestes%20a%20viver%20um%20dos%20dias%20mais%20importantes%20da%20minha%20vida%20e%20gostaria%20de%20marcar%20um%20horário%20para%20meu%20Dia%20de%20Noiva.%20Poderia%20me%20ajudar%20a%20torná-lo%20ainda%20mais%20especial?' className="mt-4 mb-4 rounded-[6px] cursor-pointer bg-[#313131] text-white px-6 py-2 lg:text-left">Agendar um horário</a>
                    </div>

                </div>
            </section>
        </>
    );
}
