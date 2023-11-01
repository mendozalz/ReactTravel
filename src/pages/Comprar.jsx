import data from "../service/data.json";
import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import tipo from "../context/tipo";
import Contexto from "../context/Contexto";

const Comprar = () => {
  const navegacion = useNavigate();
  const { dispatch2, contratar, sumaTotal, setSumaTotal, contrato } = useContext(Contexto);
  const { nombre } = useParams();
  const encontrado = contratar.find((x)=>x.nombre===nombre)
  const coincidencia = data.find((dato) => dato.nombre === nombre);

  const volver = () => {
    navegacion(-1);
  };
  /* Para que mentir, esta parte del codigo me ayudo ChatGPT no logre crear la logica por mi mismo para ello tanto este codigo como en el Reducer2 y el Provider fui ayudado por la IA*/
  const comprar = () => {
    const nuevaCompra = {
      nombre: nombre,
      precio: coincidencia.precio,
    };

    // Obtener compras previas del localStorage
    const compraGuardada = localStorage.getItem("compra");
    const comprasPrevias = compraGuardada ? JSON.parse(compraGuardada) : [];

    // Actualizar la compra y el estado local
    const nuevaCompraTotal = [...comprasPrevias, nuevaCompra];
    localStorage.setItem("compra", JSON.stringify(nuevaCompraTotal));

    setSumaTotal((prevSumaTotal) => prevSumaTotal + coincidencia.precio);
    dispatch2({
      type: tipo.contratar,
      payload: { nombre: nombre, precio: coincidencia.precio },
    });
  };


  const anular = () => {
    const compraGuardada = localStorage.getItem("compra");
    const comprasPrevias = compraGuardada ? JSON.parse(compraGuardada) : [];
  
    // Verificar si existe una compra con el mismo nombre
    const compraExistente = comprasPrevias.find((compra) => compra.nombre === nombre);
  
    if (compraExistente) {
      // Anular la compra existente
      const comprasRestantes = comprasPrevias.filter((compra) => compra.nombre !== nombre);
  
      // Actualizar el estado local y el localStorage con las compras restantes
      setSumaTotal((prevSumaTotal) => prevSumaTotal - compraExistente.precio);
      dispatch2({
        type: tipo.anular,
        payload: { nombre: nombre },
      });
  
      localStorage.setItem("compra", JSON.stringify(comprasRestantes));
    }
  };
/* Fin de ChatGPT */
  if (!coincidencia) {
    return <Navigate to="/norte" />;
  }
  return (
    <div className="contenedor w-[80%] m-auto relative">
        <button
          className="inline-block rounded-full border border-orange-600 bg-orange-600 p-3 text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500 rotate-180 absolute left-4 top-4"
          onClick={volver}
        >
          <span className="sr-only"> Volver </span>
          <svg
            className="h-5 w-5 ltr:rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
    <div className="lg:flex mt-10">
      <img className="rounded-[7%]" src={`/img/${coincidencia.imagen}`} alt={nombre} />
      <div className="lg:px-6 flex flex-col justify-between mt-6 lg:mr-50">
        <div>
          <h1 className="text-5xl font-medium text-left leading-10">{nombre}</h1>
          <h2 className="text-2xl font-medium text-left leading-6 mt-4 mb-4">{coincidencia.situacion}</h2>
          <p className="text-left mb-6">{coincidencia.servicio}</p>
        </div>
        {(!encontrado)&&<button
          className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500 w-60"
          onClick={comprar}
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-1 bg-orange-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 h-[45px]"></span>
          <span className="relative block border border-current bg-white px-8 py-3">
            Contratar
          </span>
        </button>}
        {(encontrado) && <button
          className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500 w-60"
          onClick={anular}
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-1 bg-orange-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 h-[45px]"></span>
          <span className="relative block border border-current bg-white px-8 py-3">
            Anular
          </span>
        </button>}
      </div>
    </div>
    </div>
  );
};

export default Comprar;
