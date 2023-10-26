import React,{useState, useEffect} from 'react'
import './DogsBreed.css'
/*
In your code, replace the API reference from api.thecatapi.com with api.thedogapi.com.
API KEY: live_rhd4NmGkA1tFoe8F3np5qId3nuC81OnMKMLf33eBs78Y54kAvedRNxIMH0Darxck
EXAMPLE:https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=1&api_key=live_rhd4NmGkA1tFoe8F3np5qId3nuC81OnMKMLf33eBs78Y54kAvedRNxIMH0Darxck

*/ 

export const DogsBreed = () => {
  const [selected, setSelected] = useState('')
  const [data, setData] = useState('')
  const [button, setButton] = useState(false)

  const selection  = [
    {
      "id": 1,
      "name": "Affenpinscher"
    },
    {
      "id": 2,
      "name": "Afghan Hound"
    },
    {
      "id": 3,
      "name": "African Hunting Dog"
    },
    {
      "id": 4,
      "name": "Airedale Terrier"
    },
    {
      "id": 5,
      "name": "Akbash Dog"
    },
    {
      "id": 6,
      "name": "Akita"
    },
    {
      "id": 7,
      "name": "Alapaha Blue Blood Bulldog"
    },
    {
      "id": 8,
      "name": "Alaskan Husky"
    },
    {
      "id": 9,
      "name": "Alaskan Malamute"
    },
    {
      "id": 10,
      "name": "American Bulldog"
    }
  ]

  const handleSelections = (e) => {
    setSelected(e.target.value)
    console.log(data)
    console.log("this is " + selected)
  }

  const handleApi = () => {
    fetch(`https://api.thedogapi.com/v1/images/search?limit=1&breed_ids=${selected}&api_key=live_rhd4NmGkA1tFoe8F3np5qId3nuC81OnMKMLf33eBs78Y54kAvedRNxIMH0Darxck`).then((res) => res.json()).then((data) => {
      setData(data.url)
      console.log(data)
    }).catch((err) => console.log(err))

    setButton(true)
  }



  return (
    <>
      <div className='main'>
        <div>
        <label  >Choose Dog Breed for Information</label>
          <select onChange={handleSelections}>
          {selection.map(item => 
            <option key = {item.id} value={item.id}>{item.name} </option>
          )}
            
          </select>
          <button onClick={handleApi}>Press for show</button>
        </div>
        <div>{selected}</div>
        {button ? (<div>{data}</div>) : 'No thing to show, chose dog breed for information'}
        
        {/* <img href={data} alt='breed'/> */}
      </div>
    </>
  )
}
