import React,{useState} from 'react'

export const SearchShow = () => {
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ];
    const [state, SetState] = useState(list)
    // const [filtered, setFiltered] = useState()
    

      const handleInput = (e) => {
        const added = e.target.value
        if(added === ""){
            return SetState(list)
           
        }
        const filtered = state.filter(item => item.toLowerCase().indexOf(added) !== -1)
        SetState(filtered)
        console.log(state)
       
      }

  return (
    <div className='searchShow'>
    <div>
    Search: <input onChange={handleInput}></input>
    {state.map((item, index) => 
    <div key={index}>{item}</div>)}
    </div>
    
    </div>
  )
}
