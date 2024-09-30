import { SetStateAction, useState } from 'react';

export default function Galery() {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar a imagem
  const [activeImage, setActiveImage] = useState(''); // Estado para armazenar a imagem ativa

  // Função para abrir a imagem
  const openImage = (image: SetStateAction<string>) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  // Função para fechar a imagem
  function closeImage() {
    setIsOpen(false);
    setActiveImage('');
  }

  return (
    <>
      <section id="about" className="customH py-20 linear1">
        <div className="maxWidth">
          <h1 className="text-center text-4xl font-black text- font-Dancing">Venha conhecer nossa casa</h1>
          <h1 className="text-center font-Dancing text-[#CCA686] text-6xl ">Boho Ateliê</h1>

          {/* Grid Responsiva */}
          <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-8 lg:grid-rows-8">
            <div className="col-span-1 lg:col-span-2 lg:row-span-2">
              <img
                src="Galeria1.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('Galeria1.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-3">
              <img
                src="Galeria2.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('Galeria2.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-3 lg:col-start-1 lg:row-start-3">
              <img
                src="Galeria3.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('Galeria3.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-3 lg:col-start-1 lg:row-start-6">
              <img
                src="Galeria5.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('Galeria5.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-5 lg:col-start-5 lg:row-start-1">
              <img
                src="Galeria6.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('Galeria6.jpg')}
              />
            </div>

            <div className="col-span-1 lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-6">
              <img
                src="Galeria7.jpg"
                alt=""
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openImage('Galeria7.jpg')}
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
