import React from 'react';


const Bio = () => {
  return (
    <div id="bio" className="flex flex-col text-center items-center">

      <h2 className="text-7xl font-bold">Misael Mujica Méndez</h2>

      <img src="./public/Bio.svg" alt="Misael Mujica" className="w-[25rem]" />

      <div className="bg-blue-600 px-10 rounded-[30px]">
        <p className="text-xl text-white">
        Inicia en el mundo de la música árabe en el año 2004, instruyéndose en el estudio del Derbake, el Daff, entre otros instrumentos de percusión árabe, además del estudio de los diversos ritmos árabes a manos de maestros de renombre internacional como Mohamed El Sayed (Egipcio), Osvaldo Brandan y Bryan Brandan (Argentinos). <br />
        Su carrera como <strong>músico profesional</strong> inicia en el año 2006, mostrando su arte en una amplia cantidad de galas de academias, fiestas, festivales y eventos diplomáticos de la embajada del Líbano en Venezuela. <br />
        Fue <strong>Fundador y Director</strong> del ensamble "Magrebie" de música y percusión del medio oriente. <br />
        Actualmente se dedica a ofrecer <strong>shows de percusión con bailarinas</strong> en restaurantes, tardes árabes, galas y eventos varios. Además de dictar <strong>cursos de ritmos árabes y solo de derbake</strong> para diversas academias de manera grupal y personalizada en modalidad on-line y en vivo para diversos países.
        </p>
      </div>
    </div>
  )
}

export default Bio