import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useContext } from "react";
import Contexto from "../context/Contexto";

const Login = () => {
  const navigate = useNavigate();
  const {logear, referencia, setReferencia} = useContext(Contexto)

  const login=()=>{
    logear(referencia)
    navigate('/', {replace:true})
  }
const valor = (e) =>{
  setReferencia(e.target.value)
}
  return (
<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Vive una nueva experiencia!</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form onSubmit={login} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="referencia" className="sr-only">Email</label>

        <div className="relative">
          <input
          id="referencia"
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Ingresa tu nombre de referencia"
            onChange={valor}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          /* onClick={login} */
        >
          Ingresar
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
  );
};

export default Login;