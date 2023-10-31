import { useContext } from "react";
import data from "../service/data.json";
import Contexto from "../context/Contexto";
import Footer from "../components/Footer";

const Nortpage = () => {
  const filtrado = data.filter((dato) => dato.zona == "no");
  const { contratar } = useContext(Contexto);
  return (
    <>
      <div className="grid flex-grow grid-cols-0 md:grid-cols-2 xl:grid-cols-4 altura-calculada w-auto p-[20px] 2xl:p-[40px] gap-2 md:p-[20px] md:gap-4 xl:gap-8">
        {filtrado.map((data, index) => {
          const encontrado = contratar.find((x) => x.nombre === data.nombre);
          return (
            <div
              key={index}
              className="da relative flex flex-col justify-center items-center overflow-hidden bg-gray-50 rounded-xl border-0"
            >
              <div className="absolute inset-0 bg-center dark:bg-black"></div>

              <a href={`/comprar/${data.nombre}`}>
                <div className="group relative flex h-72 2xl:h-80 max-w-100 lg:w-100 rounded-xl shadow-xl ring-gray-900/5 ">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                      src={`/img/${data.imagen}`}
                      className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  {/* Precio */}
                  <div className="absolute top-6 left-4 z-10 inline-flex gap-2 self-end rounded bg-black/30 p-1 text-white">
                    <span className="text-[18px] font-medium">
                      {" "}
                      $COP {data.precio}.000{" "}
                    </span>
                  </div>
                  {/* Fin precio */}
                  {/* Badge */}
                  {encontrado && (
                    <span className="badge absolute xl:top-2 right-2 top-6 md:top-6 sm:top-9 xl:top-6 z-20 inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-orange-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="whitespace-nowrap text-sm">Contratado</p>
                    </span>
                  )}
                  {/* Fin badge */}
                  <div className="absolute bottom-0 z-20 m-0 p-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:text-xl w-full">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl  truncate text-left">
                      {data.nombre}
                    </h1>
                    <h2 className="text-sm font-light text-gray-200 shadow-xl line-clamp-2 text-left truncate">
                      {data.situacion}
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Nortpage;
