import React from 'react'

const Servicios = () => {
  return (

    <div id="servicios">
      <div className="pt-20 flex flex-col-reverse md:flex-row  justify-between items-center px-5">
        <div>
          <img src="./public/Shows.svg" alt="Misael Mujica -Derbakista" className="w-[30rem]" />
        </div>
        <div className="md:w-1/2 space-y-5 pl-10">
          <h2 className="text-7xl font-semibold">Shows de <span className="text-cyan-600">Música</span> y Danza Árabe...</h2>
          <p className="text-xl">Para Fiestas, Bodas, Eventos Corporativos, Cumpleanos, Galas, Tardes Árabes, Amenización en Locales Comerciales y más...</p>
          <button className="px-5 py-2 rounded-lg bg-blue-600   hover:bg-blue-800"><a href="https://wa.me/56981846196" target="_blank" className="text-white font-semibold">Contrataciones</a></button>
        </div>
      </div>


      <div className="pt-20 flex flex-col md:flex-row  justify-between items-center px-5">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-7xl font-semibold"> <span className="text-cyan-600">Clases</span> de Ritmos Árabes...</h2>
          <p className="text-xl">Música en vivo para tus clases de danza árabe, academias, seminarios, festivales, instrumentos varios y diversas temáticas,<span className="text-cyan-600"> Online y Presencial!</span> </p>
        </div>

        <div>
          <img src="./public/Clases.svg" alt="Misael Mujica -Derbakista" className="w-[30rem]" />
        </div>
      </div>
      <button className="ml-4 mt-5 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-800"><a href="mailto:misaelmujica@gmail.com" target="_blank" className="text-white font-semibold">Mas informacion</a></button>
    </div>
  )
}

export default Servicios