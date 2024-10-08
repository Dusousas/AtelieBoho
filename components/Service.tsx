import { motion } from 'framer-motion';
import React from 'react';


export default function Service() {
    const cardVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <>
            <section id="services" className="customH py-20 linear">
                <h2 className="text-center text-2xl font-normal">Nossos Principais</h2>
                <h1 className="text-center text-4xl text-Primary">Serviços</h1>
                <div className="flex flex-wrap justify-center pt-14 gap-4">
                    <motion.article
                        className="md:w-1/2 lg:w-1/4 max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg"
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[#cca686] text-lg">Dia de noiva</h1>
                        <p className="text-sm mt-4">
                            Pacote completo de maquiagem, penteado, cuidados com a pele e unhas, para um dia especial inesquecível.
                        </p>
                        <a
                            className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                            href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20DIA%20DE%20NOIVA"
                            target="_blank"
                        >
                            Agendar hórario
                        </a>
                    </motion.article>

                    <motion.article
                        className="md:w-1/2 lg:w-1/4 max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg"
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[#cca686] text-lg">Maquiagem</h1>
                        <p className="text-sm mt-4">
                            Maquiagem profissional personalizada, realçando sua beleza natural com produtos de alta qualidade e longa duração.
                        </p>
                        <a
                            className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                            href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20MAQUIAGEM"
                            target="_blank"
                        >
                            Agendar hórario
                        </a>
                    </motion.article>

                    <motion.article
                        className="md:w-1/2 lg:w-1/4 max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg"
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[#cca686] text-lg">Sobrancelhas</h1>
                        <p className="text-sm mt-4">
                            Modelagem personalizada para realçar a beleza natural, proporcionando um olhar mais expressivo e harmonioso.
                        </p>
                        <a
                            className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                            href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20SOBRANCELHAS"
                            target="_blank"
                        >
                            Agendar hórario
                        </a>
                    </motion.article>

                    <motion.article
                        className="md:w-1/2 lg:w-1/4 max-w-[350px] text-center py-4 px-4 border-[#ccc] border-[1px] rounded-lg"
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[#cca686] text-lg">Luzes</h1>
                        <p className="text-sm mt-4">
                            Técnica de coloração que ilumina e dá profundidade ao cabelo, criando um visual natural e sofisticado.
                        </p>
                        <a
                            className="text-white block bg-[#cca686] mt-4 rounded-md px-12 py-2"
                            href="https://wa.me/5514910057531?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20LUZES"
                            target="_blank"
                        >
                            Agendar hórario
                        </a>
                    </motion.article>
                </div>
            </section>
        </>
    );
}
