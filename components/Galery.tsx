import { SetStateAction, useEffect, useRef, useState } from 'react';
import React from 'react';

export default function Galery() {
  const [isOpen, setIsOpen] = useState(false); 
  const [activeImage, setActiveImage] = useState(''); 
  const galeryRef = useRef<HTMLDivElement | null>(null); 
  const [isVisible, setIsVisible] = useState(false); 

  const openImage = (image: SetStateAction<string>) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  function closeImage() {
    setIsOpen(false);
    setActiveImage('');
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galeryRef.current) {
      observer.observe(galeryRef.current);
    }

    return () => {
      if (galeryRef.current) {
        observer.unobserve(galeryRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        id="about"
        className={`customH py-20 linear1 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        ref={galeryRef}
      >
        <div className="maxWidth">
          <h1 className="text-center text-2xl font-normal">Venha conhecer nossa casa</h1>
          <h1 className="text-center text-4xl text-Primary">• Boho Ateliê •</h1>

          {/* Grid Responsiva */}
          <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-8 lg:grid-rows-8">
            <div className="col-span-1 lg:col-span-2 lg:row-span-2">
              <img
                src="galeria/Galeria1.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('galeria/Galeria1.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-3">
              <img
                src="galeria/Galeria2.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('galeria/Galeria2.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-3 lg:col-start-1 lg:row-start-3">
              <img
                src="galeria/Galeria3.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('galeria/Galeria3.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-3 lg:col-start-1 lg:row-start-6">
              <img
                src="galeria/Galeria5.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('galeria/Galeria5.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-5 lg:col-start-5 lg:row-start-1">
              <img
                src="galeria/Galeria6.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('galeria/Galeria6.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-6">
              <img
                src="galeria/Galeria7.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('galeria/Galeria7.jpg')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal para exibir a imagem em tamanho real */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeImage} // Fecha ao clicar fora da imagem
        >
          <div className="relative">
            <img
              src={activeImage}
              alt="Ampliada"
              className="max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()} // Evita que o clique na imagem feche o modal
            />
            {/* Botão para fechar */}
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closeImage}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
