import { useContext } from "react";
import Contexto from "../context/Contexto";
import tipo from "../context/tipo";

const Seleccion = () => {
  const { contratar, dispatch2, referencia, sumaTotal, setSumaTotal } = useContext(Contexto);
  return (
    <>
      <section className="text-left text-3xl p-10 leading-loose">
        <h2>Lugares a visitar:</h2>
        {contratar.map((x) => (
          <div className="flex" key={x.nombre}>
            <div>
              {x.nombre}-{x.precio}
            </div>
            <button
              className="group relative inline-block text-sm font-medium text-orange-600 focus:outline-none focus:ring active:text-orange-500"
              onClick={() =>{
                setSumaTotal(sumaTotal - x.precio)
                dispatch2({ type: tipo.anular, payload: { nombre: x.nombre } })
                            }              }
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-3 bg-orange-600 transition-transform group-hover:translate-y-2 group-hover:translate-x-0 h-[45px]  "></span>

              <span className="relative block border border-current bg-white px-8 py-3 ">
                Anular
              </span>
            </button>
          </div>
        ))}
        <h2>Total a pagar: $COP {sumaTotal}</h2>
        <h2>Referencia: {referencia}</h2>
      </section>
    </>
  );
};

export default Seleccion;
