import React from 'react';
import TestimonioCard from './TestimonioCard';

const Testimonios = () => {
  return (
    <div id="testimonios">
      <h2 className="text-center text-6xl pt-20">Lo que nuestros <span className="text-cyan-600">clientes</span> opinan de nosotros!</h2>
      <div className="flex flex-col md:flex-row justify-around items-center pb-20 px-5 space-y-10 md:space-y-0 gap-2">
        <TestimonioCard />
        <TestimonioCard />
        <TestimonioCard />
      </div>
    </div>
  )
}

export default Testimonios