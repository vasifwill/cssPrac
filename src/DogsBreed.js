import React,{useState, useEffect} from 'react'
import './DogsBreed.css'
/*
In your code, replace the API reference from api.thecatapi.com with api.thedogapi.com.
API KEY: live_rhd4NmGkA1tFoe8F3np5qId3nuC81OnMKMLf33eBs78Y54kAvedRNxIMH0Darxck
EXAMPLE:https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=1&api_key=live_rhd4NmGkA1tFoe8F3np5qId3nuC81OnMKMLf33eBs78Y54kAvedRNxIMH0Darxck

*/ 

export const DogsBreed = () => {
  const [selected, setSelected] = useState('')
  const [images, setimages] = useState()
  const [breedInfo, setBreedInfo] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)


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
    console.log("this is " + selected)
    // setCurrentIndex(0)
  }

  const handleApi = () => {
    setCurrentIndex(0)
    fetch(`https://api.thedogapi.com/v1/images/search?limit=5&breed_ids=${selected}&api_key=live_rhd4NmGkA1tFoe8F3np5qId3nuC81OnMKMLf33eBs78Y54kAvedRNxIMH0Darxck`).then((res) => res.json()).then((data) => {
      const imagesUrl = data.map(item => item.url)
      setimages(imagesUrl)
      const breedInformation = {breedFor:data[0].breeds[0].bred_for,lifeSpan:data[0].breeds[0].life_span,temperament:data[0].breeds[0].temperament,origin:data[0].breeds[0].origin}
      setBreedInfo(breedInformation)
    }).catch((err) => console.log(err))

    

  }


  const handleNext = () => {
    setCurrentIndex(prev => 
      prev === images.length - 1 ? prev= 0: prev+1
    )

  }
  const handlePrevious = () => {
    setCurrentIndex(prev =>
      prev === 0 ? prev= images.length-1: prev -1)
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
        <div className='images-content'>
        <div>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrevious}>Previous</button>
        </div>
        {images && <img  src={images[currentIndex]} alt='breed' className='imgBreed'/> }
        {images && <p>{currentIndex}/{images.length}</p>}
        </div>
        <div className='info-content'>
          {breedInfo && <>
          <h1>Information</h1>
          <h3>Breed for: {breedInfo.breedFor}</h3>
          <h3>Life Span:{breedInfo.lifeSpan}</h3>
          <h3>Temperament: {breedInfo.temperament}</h3>
          <h3>Origin: {breedInfo.origin}</h3>
          </>}
        </div>
        
      </div>
    </>
  )
}
