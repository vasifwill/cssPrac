import React from 'react'
import "./App.css"


export const Cart = ({blog}) => {
  return (
    <>
    <div className='cartFirst'>
   {blog.map((item) => {
    return (
        <ul className='cartList'>
        <li key={item.id}>
        <h2>{item.topic}</h2>
        <h3>{item.description}</h3>
        </li>
        </ul>)
   })}
    </div>
    </>
  )
}
