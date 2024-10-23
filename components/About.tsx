import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';


export default function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true, // Garante que a animação ocorra apenas uma vez
    threshold: 0.1,    // Inicia a animação quando 10% da seção estiver visível
  });

  return (
    <>
      <section id="about" className="py-12 customH" ref={aboutRef}>
        <div className="maxWidth">

          {/* Título "Sobre a" */}
          <motion.h2
            className="text-center text-2xl font-normal"
            initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado para baixo
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }} // Animação de entrada
            transition={{ duration: 0.6 }} // Duração da animação
          >
            Sobre a
          </motion.h2>

          {/* Título "Boho Ateliê" */}
          <motion.h1
            className="text-center text-4xl text-Primary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Atraso de 0.2s para o segundo título
          >
            • Boho Ateliê •
          </motion.h1>

          {/* Parágrafo */}
          <motion.p
            className="mt-6 mb-20 mx-auto max-w-[800px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.4 }} // Atraso de 0.4s para o parágrafo
          >
            Boho Ateliê é um salão de beleza especializado em serviços de manicure, pedicure, maquiagem e cabelo. Além disso, oferece pacotes completos para o dia da noiva, garantindo um atendimento personalizado e de alta qualidade para tornar esse momento ainda mais especial. Com um ambiente acolhedor e profissionais qualificados, Boho Ateliê é a escolha perfeita para quem busca cuidado e beleza em um só lugar. Livre, leve, descontraído, prazeroso e aventureiro.
          </motion.p>

          {/* Seção dos artigos */}
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-1/2 px-2">
              <div className="flex flex-wrap gap-2 text-center md:text-left">

                {/* Artigo 1 - Manicure */}
                <motion.article
                  className="md:w-[48%]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.6 }} // Atraso de 0.6s para o primeiro artigo
                >
                  <div className="text-center flex justify-center md:justify-normal">
                    <img src="/manicure.png" alt="Manicure" />
                  </div>
                  <h2 className="font-semibold pt-2">Manicure</h2>
                  <p className="text-sm">
                    Oferecemos serviços de manicure que transformam suas unhas em verdadeiras obras de arte. De cuidados clássicos a designs modernos, garantimos unhas impecáveis e saudáveis.
                  </p>
                </motion.article>

                {/* Artigo 2 - Cabelo */}
                <motion.article
                  className="md:w-[48%]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.8 }} // Atraso de 0.8s para o segundo artigo
                >
                  <div className="text-center flex justify-center md:justify-normal">
                    <img src="/hair.png" alt="Cabelo" />
                  </div>
                  <h2 className="font-semibold pt-2">Cabelo</h2>
                  <p className="text-sm">
                    Nossos serviços de cabelo são projetados para realçar sua beleza natural. Desde cortes modernos e colorações vibrantes até tratamentos que fortalecem e revitalizam, cuidamos dos seus cabelos com a atenção e a expertise que eles merecem.
                  </p>
                </motion.article>

                {/* Artigo 3 - Maquiagem */}
                <motion.article
                  className="md:w-[48%]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1 }} // Atraso de 1s para o terceiro artigo
                >
                  <div className="text-center flex justify-center md:justify-normal">
                    <img src="/toiletries.png" alt="Maquiagem" />
                  </div>
                  <h2 className="font-semibold pt-2">Maquiagem</h2>
                  <p className="text-sm">
                    Transforme seu visual com nossas maquiagens profissionais. Seja para um evento especial ou para o dia a dia, nossos maquiadores criam looks deslumbrantes que destacam sua beleza única.
                  </p>
                </motion.article>

                {/* Artigo 4 - Noivas */}
                <motion.article
                  className="md:w-[48%]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 1.2 }} // Atraso de 1.2s para o quarto artigo
                >
                  <div className="text-center flex justify-center md:justify-normal">
                    <img src="/noiva.png" alt="Noivas" />
                  </div>
                  <h2 className="font-semibold pt-2">Noivas</h2>
                  <p className="text-sm">
                    Como especialistas em noivas, oferecemos serviços completos para o grande dia. De penteados elegantes a maquiagens impecáveis, cuidamos de cada detalhe para que você se sinta deslumbrante e confiante no seu momento especial.
                  </p>
                </motion.article>

              </div>
            </div>

            {/* Imagem à direita */}
            <div className="hidden lg:block lg:w-1/2">
              <motion.img
                className="lg:w-full"
                src="/sobre-img.webp"
                alt="Boho Ateliê"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: aboutInView ? 1 : 0, x: aboutInView ? 0 : 100 }}
                transition={{ duration: 0.6, delay: 1.4 }} // Atraso para a imagem
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
