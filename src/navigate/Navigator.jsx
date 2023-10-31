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
    <nav className="bg-black text-3xl text-white flex justify-between px-10 py-2">
      <div className="flex justify-between w-[400px]">
        <NavLink to="norte">Norte</NavLink>
        <NavLink to="sur" className="capitalize">Sur</NavLink>
        <NavLink to="seleccion">Mi selección</NavLink>
      </div>
      <button onClick={login}>Logout</button>
    </nav>
    
    </>
  )
}

export default Navigator