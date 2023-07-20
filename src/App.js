import {  useEffect, useState } from "react";
import "./App.css"
import { InfoContext } from "./InfoContext";
import { contextApi } from "./context/contextApi";
import { Link, Route, Routes } from "react-router-dom";
import { CssPrac } from "./cssPrac";
import { Home } from "./Home";
import { Cart } from "./Cart";
import blog from "./data";
import { Counter} from "./ReduxCalculator";
import { Form } from "./Form";
// import { Api } from "./Api";
import axios from "axios";
import { SearchShow } from "./SearchShow";
import { Playlist } from "./Playlist";


function App() {
  const names = {name:"vasif", lastname:"mammadov"}
  const [state, setState] = useState({})
  const [button, setButton] = useState(false)
  const [formButton, setFormButton] = useState(false)
  // const [apiName, setApiName] = useState({})
  // const [apiButton, setApiButton] = useState(false)
  // const [apiSelect, setSelectApi] = useState('male')
  const [form, setForm] =  useState({
    firstName:"",
    lastName:"",
    email:"",
    age:""
  })
  const onSubmit = (e)=> {
   e.preventDefault()
   setButton(true)
   }

    const handleChange = (e) => {
      const {name, value} = e.target
    setState(state => ({...state,[name]:value}))
    setButton(false)
    }

    const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormButton(true)
    }

    const HandleForm = (e)=> {
    const {name, value} = e.target
    setForm(pre => ({...pre, [name]:value}))
    setFormButton(false)

    //Api Section
    //https://gorest.co.in/public/v1/users?gender=female

    // const useCallApi =  () => {
    //   setApiButton(true)
    //   const res =  axios.get(`https://gorest.co.in/public/v1/users?gender=female`)
    //   console.log(res)
    //   setApiName(res.data.data[1])
    // }



    // .then(data => {
    //   setApiName(data)
    //   console.log(data)
    // }).catch(error => {
    //   alert(error)
    // })

    // useEffect(() => {
    //   CallApi()
    // },[apiSelect])
}

  return (
    <>
    <div className="navigator">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/css">CssPractise</Link></li>
        <li><Link to="/context">Context</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/redux">Redux</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/searchshow">SerachShow</Link></li>
        <li><Link to="/playlist">Playlist</Link></li>
      </ul>
      </div>
    
    <div >
   <contextApi.Provider value={{names}}>
    <Routes>
    <Route path="/" element={<Home onSubmit={onSubmit} handleChange={handleChange} button={button} state={state}/>}/>
    <Route path="/css" element={<CssPrac />} />
    <Route path="/context" element={<InfoContext />}/>
    <Route path="/cart" element={<Cart blog={blog}/>} />
    <Route path="/redux" element={<Counter />} />
    <Route path="/form" element={<Form  form={form} HandleForm={HandleForm} handleFormSubmit={handleFormSubmit} formButton={formButton}/>} />
    <Route path="/searchshow" element={<SearchShow/>}></Route>
    <Route path="/playlist" element={<Playlist />}></Route>
    {/* <Route path="/api" element={<Api setSelectApi={setSelectApi} apiName={apiName}  />} /> */}
    </Routes>
    </contextApi.Provider>
    </div>

    <div className="touch">
    
      <div className="touch1">Hover me 1<span className="toolTip">This are we call pop up area size is 500x500. This is just show area. We will work on it in next month. This is demo version</span></div>
      <div className="touch2">Hover me 2</div>
      {/* <div className="touch3">
        <button onClick={useCallApi}>Push for api</button>
        {apiButton ? <h1>{toString(apiName)}</h1> : <h1>push button</h1>}
        
      </div> */}
      </div>
  
    </>
  );
}

/// export default function App() {
//   const [state , setState] = useState("")
//   const [list, setList] = useState([])
 
//   //Create state input value
//   // state for list 
 
//   const handleChange =  (e) => {
//     const inputs = e.target.value
// setState(inputs). 
 
//   }
 
//   const handleButton = () => {
 
//     setList([...list, state ])
//   }
 
 
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div>
//         <input onChange={handleChange}  />
//         <button className="button1" onClick={handleButton}/>
//         <ul>
//         {list.map((item, index) =>  (
//           <li key = {index}> {item}</li>
//         ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


export default App;
