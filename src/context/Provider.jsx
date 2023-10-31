import Contexto from "./Contexto";
import { useReducer, useState, useEffect } from "react";
import {Reducer, Reducer2} from "./Reducer";
import tipo from "./tipo";

const init =()=> {
    const user = localStorage.getItem("estado")
    return{
        estado:!!user,
        usuario:user
    }
}
const valor = []
const Provider = ({children}) => {
    const [logeado, dispatch] = useReducer(Reducer,{},init);
    const [contratar, dispatch2] = useReducer(Reducer2, valor);
    const [referencia, setReferencia] = useState("");
    const [sumaTotal, setSumaTotal] = useState(0);

    const logear=(user)=>{
        localStorage.setItem("estado", user);
        dispatch({type:tipo.login, payload:user});

    }

    const desloguear=()=>{
        localStorage.removeItem("estado");
        dispatch({type:tipo.logout});
    }

 /* Para que mentir, esta parte del codigo me ayudo ChatGPT no logre crear la logica por mi mismo para ello tanto este codigo como en el Reducer2 y el componente Comprar.jsx fui ayudado por la IA*/

  useEffect(() => {
    const compraGuardada = localStorage.getItem("compra");
    if (compraGuardada) {
      const compra = JSON.parse(compraGuardada);
      dispatch2({ type: tipo.cargarCompra, payload: compra });
      const total = compra.reduce((acc, item) => acc + item.precio, 0);
      setSumaTotal(total);
    }
  }, []);

/* Fin de ChatGPT */

  return (
    <Contexto.Provider value={{
        ...logeado, 
        logear, 
        desloguear, 
        contratar, 
        dispatch2,
        referencia,
        setReferencia,
        sumaTotal,
        setSumaTotal,

        }}>
        {children}
    </Contexto.Provider>
  )
}
 
export default Provider