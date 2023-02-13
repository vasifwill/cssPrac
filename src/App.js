import { useState } from "react";
import "./App.css"
import { InfoContext } from "./InfoContext";
import { contextApi } from "./context/contextApi";
import { Link, Route, Routes } from "react-router-dom";
import { CssPrac } from "./cssPrac";
import { Home } from "./Home";
import { Cart } from "./Cart";
import blog from "./data";


function App() {
//   const blog = [{
//     id:'1',
//     topic:"health",
//     description:"For past 3 years I’ve been working alongside developers team to help create and optimize web application. I have written software mostly in Javasicript /Typescript  but im also comfortable with java and python."
//   },
// {
//   id:'2',
//   topic:"work and life balace",
// description:"I'm looking for a role that will leverage my expertise in software engineering and frontend development while allowing me the opportunity to be a part of building application or product from ground up."
// },
// {
//   id:'3',
//   topic:"world",
//   description:"The reality is there is always a better coder than me Which he or she has more experience in this field. "
// }]
  const names = {name:"vasif", lastname:"mammadov"}
  const [state, setState] = useState({})
  const [button, setButton] = useState("false")
const onSubmit = (e)=> {
e.preventDefault()
setButton('true')
}

const handleChange = (e) => {
  const {name, value} = e.target
setState(state => ({...state,[name]:value}))
setButton(false)
}

  return (
    <>
    <div className="navigator">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/css">CssPractise</Link></li>
        <li><Link to="/context">Context</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      </div>
    
    <div >
   <contextApi.Provider value={{names}}>
    <Routes>
    <Route path="/" element={<Home onSubmit={onSubmit} handleChange={handleChange} button={button} state={state}/>}/>
    <Route path="/css" element={<CssPrac />} />
    <Route path="/context" element={<InfoContext />}/>
    <Route path="/cart" element={<Cart blog={blog}/>} />
    </Routes>
    </contextApi.Provider>
    </div>
    
      <div className="touch1">Hover me 1<span className="toolTip">This are we call pop up area size is 500x500. This is just show area. We will work on it in next month. This is demo version</span></div>
      <div className="touch2">Hover me 2</div>
  
    </>
  );
}

export default App;
