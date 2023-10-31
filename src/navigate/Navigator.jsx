import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";

const Navigator = () => {
  const navigate = useNavigate();
  const {desloguear} = useContext(Contexto)
  const login = ()=>{
    desloguear()
    navigate('/', {replace:true})
  }
  return (
    <>
    <nav className="bg-white text-2xl text-orange-200 font-bold flex justify-between px-10 py-4">
      <div className="flex justify-between items-center w-[500px]">
        <NavLink to="norte">Zona Norte</NavLink>
        <NavLink to="sur" className="capitalize">Zona Sur</NavLink>
        <NavLink to="seleccion">Mi selección</NavLink>
      </div>
      <button
              className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500"
              onClick={login}
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-3 bg-orange-600 transition-transform group-hover:translate-y-2 group-hover:translate-x-0 h-[40px]  "></span>

              <span className="relative block border border-current bg-white px-8 py-3 ">
                Logout
              </span>
            </button>
    </nav>
    <hr className="mx-auto w-[80%]  border-1 border-orange-500 " />
    
    </>
  )
}

export default Navigator