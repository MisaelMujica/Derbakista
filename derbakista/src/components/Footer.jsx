import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  return (
    <footer id="footer" className="pt-2 bg-slate-400 rounded-lg text-white mb-[-25px]">
        <div className="Redes-sociales mb-[-20px] ml-1 pt-4">
            <a href="https://web.facebook.com/people/Misael-Mujica-Derbakista/100063488434973/?sk=about" target="_blank" ><FaFacebook className="mx-4 text-white text-xl"/></a>
            <a href="https://www.instagram.com/derbakista/" className="mx-2" target="_blank"><FaInstagram className="mx-4 text-white text-xl" /></a>
            <a href="mailto:misaelmujica@gmail.com" target="_blank" ><IoIosMail className="mx-4 text-white text-xl" /></a>
            <a href="https://www.tiktok.com/@misaelmujica" target="_blank" ><FaTiktok  className="mx-4 text-white text-xl"/></a>
            <a href="https://www.youtube.com/@longyuanchuan/videos" target="_blank" ><FaYoutube className="mx-4 text-white text-xl" /></a>
        </div>
      <div className="p-5 grid grird-cols-2 md:grid-cols-8 gap-8">

        <div className="col-span-2">
          <h2>Contacto:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <a href="mailto:misaelmujica@gmail.com" target="_blank" className="text-white">Correo Electronico</a>
            <a href="https://wa.me/56981846196" target="_blank" className="text-white">Whatsapp</a>
            <a href="https://www.instagram.com/derbakista/" target="_blank" className="text-white">Instagram</a>
            <a href="https://web.facebook.com/people/Misael-Mujica-Derbakista/100063488434973/?_rdc=1&_rdr" target="_blank" className="text-white">Facebook</a>
          </div>
        </div>
        <div className="col-span-2">
          <h2>Galería:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <a href="https://www.instagram.com/derbakista/" className="text-white">Fotos</a>
            <a href="https://www.instagram.com/derbakista/" className="text-white">Videos</a>
            <a href="mailto:misaelmujica@gmail.com" target="_blank" className="text-white">Clases On-line</a>
            <a href="mailto:misaelmujica@gmail.com" target="_blank" className="text-white">Clases Presenciales</a>

          </div>
        </div>

        <div className="col-span-2">
          <h2>Enlaces de interés:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <a href="/" className="text-white">Lulu Maiz-Bellydancer</a>
            <a href="/" className="text-white">Clases de Danza Árabe</a>
            <a href="/" className="text-white">Podcast</a>

          </div>
        </div>
        <div className="col-span-2">
          <h2>Extra:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <a href="https://wa.me/56981846196" className="text-white">Diseño</a>
            <a href="https://wa.me/56981846196" className="text-white">Producción audiovisual</a>
            <a href="https://wa.me/56981846196" className="text-white">Desarrollo web</a>
            <a href="https://wa.me/56981846196" className="text-white">Artes Marciales</a>
          </div>
        </div>
        

      </div>
      <p className="text-center bg-slate-500 text-white">Diseñado por Misael Mujica (2024) &#169;</p>
    </footer>
  )
}

export default Footer