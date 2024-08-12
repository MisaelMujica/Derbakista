import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const Hero = () => {
  return (
    <div id="inicio">
      <div className="pt-20 flex flex-col md:flex-row  justify-between items-center px-5">
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-7xl font-semibold">Ameniza tu <span className="text-cyan-600">Fiesta!</span> dale ese toque único...</h1>
          <p className="text-xl">y sorprende a tus invitados con hermosas bailarinas profesionales y música en vivo!</p>
        </div>

        <div>
          <img src="./public/Hero.svg" alt="Misael Mujica -Derbakista" className="w-[30rem]"/>
        </div>

      </div>
      <div className="flex pb-10 pt-7 items-center">
        <p className="mr-8"><strong>+17 años</strong> de experiencia</p>
        <p className="mr-8"><strong>Eventos</strong> Corporativos</p>
        <p className="mr-8"><strong>Clases</strong> On-line y Presenciales</p>
        <p className="mr-8"><strong>Bodas</strong> y Fiestas de todo tipo</p>
        <p className="mr-8"><strong>Cumpleaños</strong> y mucho mas!</p>
      </div>
      <div className="fixed bottom-2 right-4 ">
          <a  className="text-green-500 text-[50px] hover:text-blue-600" href="https://wa.me/56981846196" target="_blank" ><IoLogoWhatsapp /></a>
      </div>
    </div>
  )
}

export default Hero