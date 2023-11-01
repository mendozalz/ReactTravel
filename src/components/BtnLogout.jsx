import React, { useContext } from 'react'
import Contexto from '../context/Contexto';

const BtnLogout = () => {
    const { desloguear } = useContext(Contexto);

    const login = () => {
      desloguear();
      navigate("/", { replace: true });
    };
  return (
    <button
          className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500 z-[99] mb-6 md:mb-0"
          onClick={login}
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-3 bg-orange-600 transition-transform group-hover:translate-y-2 group-hover:translate-x-0 h-[40px] "></span>
          <span className="relative block border border-current bg-white px-8 py-3">
            Logout
          </span>
        </button>
  )
}

export default BtnLogout