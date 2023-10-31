import  tipo  from "./tipo";

export const Reducer = (state=[], action) => {
  switch (action.type) {
    case tipo.login:
        return{
            estado:true,
            usuario:action.payload,

        }
    case tipo.logout:
        return{
            estado:false,
            usuario:null
        }
    default:
        return state
  }
}


export const Reducer2 = (state=[], action) => {
  switch (action.type) {
    case tipo.contratar:
        let newNombre = action.payload.nombre;
        let newPrecio = action.payload.precio
        return [
            ...state,{nombre:newNombre, precio:newPrecio}
        ]
        
    case tipo.anular:
        return state.filter(x=>x.nombre!==action.payload.nombre)
 /* Para que mentir, esta parte del codigo me ayudo ChatGPT no logre crear la logica por mi mismo para ello tanto este codigo como en el Provider y el componente Comprar.jsx fui ayudado por la IA*/
    case tipo.cargarCompra:
        return action.payload;

/* Fin de la ayuda de ChatGPT */

    default:
        return state
  }
}

export default Reducer2;