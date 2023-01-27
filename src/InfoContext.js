import React,{useContext} from 'react'
import { contextApi } from './context/contextApi'

export const InfoContext = () => {
    const {names} = useContext(contextApi)
  return (
    <div>
        <h1>Name {names.name}</h1>
        <h2>LastName {names.lastname}</h2>
    </div>
  )
}
