import data from "../service/data.json";

const Surpage = () => {
  const filtrado = data.filter(dato=> dato.zona=="cp")
  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-4 bg-gray-50 h-screen w-auto p-[20px] xl:p-[40px] gap-2 md:p-[20px] md:gap-4">
        {filtrado.map((data, index) => {
          return (
            <div
              key={index}
              className="da relative flex flex-col justify-center items-center overflow-hidden bg-gray-50"
            >
              <div className="absolute inset-0 bg-center dark:bg-black"></div>
              <a href={`/comprar/${data.nombre}`}>
                <div className="group relative flex h-72 max-w-100 lg:w-100 rounded-xl shadow-xl ring-gray-900/5">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                      src={`/img/${data.imagen}`}
                      className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  {/* Precio */}
                  <div className="absolute top-6 left-4 z-10 inline-flex gap-2 self-end rounded bg-black/30 p-1 text-white">
                    <span className="text-[18px] font-medium"> $COP {data.precio}.000 </span>
                  </div>
                  {/* Fin precio */}
                  <div className="absolute bottom-0 z-20 m-0 p-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 w-full">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl  truncate text-left">
                      {data.nombre}
                    </h1>
                    <h1 className="text-sm font-light text-gray-200 shadow-xl line-clamp-2 text-left">
                      {data.situacion}
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Surpage