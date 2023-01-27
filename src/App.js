import { useState } from "react";
import { InfoContext } from "./InfoContext";
import { contextApi } from "./context/contextApi";


function App() {
  const names = {name:"vasif", lastname:"mammadov"}
  const [state, setState] = useState("...")
  const [button, setButton] = useState("false")

  

const onSubmit = ()=> {
setButton('true')
}

const handleChange = (e) => {
setState(e.target.value)
setButton(false)
}

  return (
    <div className="App">
    <input placeholder="name"  name="name" onChange={handleChange}></input>
    <button onClick={onSubmit} style={{height:"20px", width:"70px"}}  ></button>
    <h1>{button ? (<a>{state}</a>):(<a>...</a>)} </h1>
   <div>
    <contextApi.Provider value={{names}}>
    <InfoContext />
    </contextApi.Provider> 
    </div>
    </div>
  );
}

export default App;
