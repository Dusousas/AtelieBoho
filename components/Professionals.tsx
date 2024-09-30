import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // CSS do Swiper

export default function Professionals() {
    return (
        <section id="professionals" className="md:flex customH">
            <div className="bg-left w-full py-16 md:w-[40%] mr-8 px-2 ">
                <div className="text-center">
                    <h2 className="text-2xl text-white tracking-wide uppercase">Nossos</h2>
                    <h1 className="text-3xl text-[#cca686] tracking-wide uppercase mt-3">Profissionais</h1>
                    <p className="text-white mt-3">Conheça todos nossos experts que estão a sua disposição para cuidar do seu cabelo.</p>
                </div>
            </div>



            {/* Carousel */}
            <div className="md:w-[60%] flex flex-col py-20">
                <div className='w-full flex justify-center mb-8'>
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
        </section>
    );
}
