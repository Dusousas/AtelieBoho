import React from 'react';
import Marquee from 'react-marquee-slider';

export default function Brands() {
  const logos = [
    { src: '/Redken.png', alt: 'Redken' },
    { src: '/Loreal1.png', alt: 'Loreal' },
    { src: '/Wella1.png', alt: 'Wella' },
    { src: '/Kerastase1.png', alt: 'Kerastase' },
    { src: '/Olorchee1.png', alt: 'Olorchee' },
  ];

  return (
    <section id="services" className="bg-[#F9ECE1] customH py-4 overflow-hidden">
      <div className="maxWidth">
        <Marquee velocity={20} scatterRandomly={false} resetAfterTries={100}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-32">
              <img className="w-[110px]" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
