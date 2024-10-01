import React from 'react';

export default function Bride() {
    return (
        <>
            <section className='customH py-20 bgBride'>
                <div className='maxWidth'>
                    <h2 className="text-center text-4xl font-black font-Dancing">Dia de</h2>
                    <h1 className="text-center text-6xl font-Dancing text-Primary pb-10">Noiva</h1>


                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">

                        {/* Imagem 1 */}
                        <div className="lg:col-start-1 lg:row-start-3">
                            <img className='object-cover object-top w-full max-h-[300px]' src="Noiva1.jpeg" alt="Noiva 1" />
                        </div>

                        {/* Imagem 4 */}
                        <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1">
                            <img className='object-cover w-full max-h-[614px]' src="Noiva4.jpeg" alt="Noiva 4" />
                        </div>

                        {/* Imagem 3 */}
                        <div className="lg:col-start-3 lg:row-start-1">
                            <img className='object-cover object-top w-full max-h-[300px]' src="Noiva3.jpeg" alt="Noiva 3" />
                        </div>

                        {/* Imagem 2 */}
                        <div className="lg:row-span-2 lg:col-start-1 lg:row-start-1">
                            <img className='object-cover w-full h-full' src="Noiva2.jpeg" alt="Noiva 2" />
                        </div>

                        {/* Imagem 5 */}
                        <div className="lg:col-start-2 lg:row-start-3">
                            <img className='object-cover w-full h-full max-h-[300px]' src="Noiva5.jpg" alt="Noiva 5" />
                        </div>

                        {/* Imagem 6 */}
                        <div className="lg:row-span-2 lg:col-start-3 lg:row-start-2">
                            <img className='object-cover object-top w-full max-h-[614px]' src="Noiva6.jpg" alt="Noiva 6" />
                        </div>
                    </div>

                    <div className='mx-auto text-center mt-12'>
                        <a href='' className="mt-4 mb-4 rounded-[6px] cursor-pointer bg-[#313131] text-white px-6 py-2 lg:text-left">Agendar um horário</a>
                    </div>

                </div>
            </section>
        </>
    );
}
