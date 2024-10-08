import { motion } from 'framer-motion';
import React from 'react';

export default function Main() {
    return (
        <>
            <section id="main" className="bgMain py-20 customH flex items-center ">
                <article className='maxWidth'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-[700px] text-center py-20 bg-black bg-opacity-50 p-4 rounded-lg">
                        <h1 className="text-white textShadow text-center uppercase text-4xl mt-4 md:text-6xl font-medium">Seus cabelos precisam dos cuidados certos.</h1>
                        <p className="text-white textShadow text-center pt-4">Realce sua beleza natural com cuidados personalizados que seus cabelos merecem</p>
                        <div className='mt-6'>
                            <a target='_blank' href='https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.' className="rounded-[6px] bg-[#313131] text-white px-6 py-2">Saiba mais</a>
                        </div>
                    </motion.div>
                </article>
            </section>
        </>
    );
}
