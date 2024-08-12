import React from 'react';
import { useState } from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";

const Navbar = () => {
  const [desplegar, setdesplegar] = useState(false)
  return (
    <div className="flex justify-between items-center px-5 pt-3 pb-2 sticky top-0 navbar rounded-2xl">
      <h1 className="text-sm"><strong>Misael Mujica</strong> -Derbakista</h1>
      <div className="flex items-center space-x-5">
        <ul className="hidden md:flex list-none items-center space-x-8 text-black">
          <li><a className="hover:text-blue-800 cursor-pointer" href="#inicio">Inicio</a></li>
          <li><a className="hover:text-blue-800 cursor-pointer" href="#bio">Bio</a></li>
          <li><a className="hover:text-blue-800 cursor-pointer" href="#servicios">Servicios</a></li>
          <li><a className="hover:text-blue-800 cursor-pointer" href="#testimonios">Testimonios</a></li>
          <li><a className="hover:text-blue-800 cursor-pointer" href="#footer">Contacto</a></li>
        </ul>
        <div className="space-x-2">
          <button className="bg-blue-500 hover:bg-blue-800 md:hidden flex" onClick={() => setdesplegar((prev) => !prev)}>
            <BsThreeDotsVertical className="text-white"/>
          </button>
        </div>
      </div>
      <div className={`${desplegar ? 'flex' : 'hidden'} md:hidden p-3 navbar absolute top-20 right-0 mt-[-20px] mx-5 min-w-[140px] rounded-xl`}>
        <ul className="list-none flex flex-col  ">
        <li className="my-2"><a className="text-black hover:text-blue-800 cursor-pointer" href="#inicio">Inicio <FaHome /></a></li>
          <li className="my-2"><a className="text-black hover:text-blue-800 cursor-pointer" href="#bio">Bio <IoMdContact /></a></li>
          <li className="my-2"><a className="text-black hover:text-blue-800 cursor-pointer" href="#servicios">Servicios <GrServices /></a></li>
          <li className="my-2"><a className="text-black hover:text-blue-800 cursor-pointer" href="#testimonios">Testimonios <IoIosPeople /></a></li>
          <li className="my-2"><a className="text-black hover:text-blue-800 cursor-pointer" href="#footer">Contacto <MdOutlineContactSupport /></a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar