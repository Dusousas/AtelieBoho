import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // CSS do Swiper
import { motion } from 'framer-motion'; // Importando o framer-motion
import { useInView } from 'react-intersection-observer'; // Importando o react-intersection-observer

export default function Professionals() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Para garantir que o efeito será ativado apenas uma vez
        threshold: 0.1, // 10% da seção visível para ativar o efeito
    });

    return (
        <motion.section
            id="professionals"
            className="md:flex customH"
            ref={ref} // A seção será monitorada
            initial={{ opacity: 0 }} // Começa invisível
            animate={{ opacity: inView ? 1 : 0 }} // Quando estiver em view, a opacidade vai para 1
            transition={{ duration: 0.5 }} // Animação de transição suave
        >
            <div className="bg-left w-full py-16 md:w-[40%] mr-8 px-2 ">
                <div className="text-center">
                    <h2 className="text-2xl font-light text-white tracking-wide uppercase">Nossos</h2>
                    <h1 className="text-5xl text-Primary tracking-wide font-Dancing">Profissionais</h1>
                    <p className="text-white mt-3">Conheça todos nossos experts que estão a sua disposição para cuidar de você.</p>
                </div>
            </div>

            {/* Carousel */}
            <div className="md:w-[60%] flex flex-col py-12">
                <div className='w-full flex justify-center mb-12'>
                    <img className='w-[300px]' src="Setas.png" alt="" />
                </div>

                <div className='flex'>
                    <Swiper
                        slidesPerView={1} // Exibir 1 slide por vez em dispositivos móveis
                        spaceBetween={30} // Espaço entre os slides
                        centeredSlides={true} // Centralizar slides
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                                centeredSlides: false,
                            },
                        }}
                    >
                        {/* SwiperSlides */}
                        <SwiperSlide>
                            <article className="flex flex-col items-center md:items-start"> {/* Alinhamento diferente em mobile e desktop */}
                                <img src="/perfil01.png" alt="Ana Chelly" className="mb-2" />
                                <h1 className="font-normal text-center md:text-left">Ana Chelly</h1>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Hairstylist</p>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="flex flex-col items-center md:items-start">
                                <img src="/perfil02.png" alt="Ana Paula" className="mb-2" />
                                <h1 className="font-normal text-center md:text-left">Ana Paula</h1>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Hairstylist</p>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="flex flex-col items-center md:items-start">
                                <img src="/perfil03.png" alt="Claudia Ribeiro" className="mb-2" />
                                <h1 className="font-normal text-center md:text-left">Claudia Ribeiro</h1>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Manicure | Pedicure | Depilação</p>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Design de sobrancelha</p>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="flex flex-col items-center md:items-start">
                                <img src="/perfil04.png" alt="Tetê Ferrari" className="mb-2" />
                                <h1 className="font-normal text-center md:text-left">Tetê Ferrari</h1>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Especialista em noivas | Corte</p>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Cabelos cacheados | Maquiadora</p>
                            </article>
                        </SwiperSlide>

                        <SwiperSlide>
                            <article className="flex flex-col items-center md:items-start">
                                <img src="/perfil05.png" alt="Hiara Balbino" className="mb-2" />
                                <h1 className="font-normal text-center md:text-left">Hiara Balbino</h1>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Cílios | Limpeza de pele | SPA Facial</p>
                                <p className="text-[#cca686] font-normal text-xs text-center md:text-left">Dermaplaning | Hidra Gloss</p>
                            </article>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </motion.section>
    );
}
