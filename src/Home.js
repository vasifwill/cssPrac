import React from 'react'
import "./App.css"

export const Home = ({onSubmit, handleChange, button, state}) => {
  return (
    <div >
    <div className="Home">
    <form onSubmit={onSubmit}>
    <input placeholder="name"  name="firstname"  onChange={handleChange}></input>
    <input placeholder="last name"  name="lastname"  onChange={handleChange}></input>
    <button type="submit" style={{height:"20px", width:"70px"}}  >Press</button>
    <h1>{button ? (<p>First name is :{state.firstname} , Lastname is :{state.lastname} </p>):(<p>...</p>)} </h1>
    </form>
   </div>
   </div>
  )
}
