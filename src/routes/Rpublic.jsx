import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const Rpublic = ({children}) => {
    const {estado} = useContext(Contexto)
  return (!estado) ? children : <Navigate to="/norte"/>
}

export default Rpublic