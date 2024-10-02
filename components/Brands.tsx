import React from 'react';
import Marquee from 'react-marquee-slider';

const logos = [
  { src: '/Redken.png', alt: 'Redken' },
  { src: '/Loreal1.png', alt: 'Loreal' },
  { src: '/Wella1.png', alt: 'Wella' },
  { src: '/Kerastase1.png', alt: 'Kerastase' },
  { src: '/Olorchee1.png', alt: 'Olorchee' },
];

const Brands: React.FC = () => {
  const handleInit = () => {
    console.log('Marquee initialized');
  };

  const handleFinish = () => {
    console.log('Marquee finished');
  };

  return (
    <>
      <section id="services" className="bg-[#F9ECE1] customH py-4 overflow-hidden">
        <div className="">
          <Marquee
            velocity={30}
            scatterRandomly={false}
            resetAfterTries={100}
            direction="rtl" // Direção do marquee
            onInit={handleInit} // Callback na inicialização
            onFinish={handleFinish} // Callback ao finalizar
          >
            {logos.map((logo, index) => (
              <div key={index} className="mx-32">
                <img className="w-[110px]" src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Brands;
