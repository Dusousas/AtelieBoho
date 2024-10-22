import React, { useState } from 'react';
import Cards from './subcomponents/Cards';

export default function Service() {



    return (
        <section id="services" className="customH py-20 linear">
            <h2 className="text-center text-2xl font-normal">Nossos Principais</h2>
            <h1 className="text-center text-4xl text-Primary">Serviços</h1>

            <div className="flex flex-wrap mx-auto justify-center pt-14 gap-4 w-[70%]">
                
                <Cards />
            </div>
        </section>
    );
}
