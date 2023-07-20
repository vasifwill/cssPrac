import React, { useState } from 'react'
import { BiPlayCircle, BiSkipNextCircle,BiPauseCircle, BiSkipPreviousCircle} from 'react-icons/bi';

import './playlist.css'

export const Playlist = () => {
    const data = [
        {
            'name': 'Yesterday',
            'artist': 'Beatles',
            'id': '1'
        },
        {
            'name': 'Nothing else matter',
            'artist': 'Metallica',
            'id': '2'
        },
        {
            'name': 'Always',
            'artist': 'Bon Jovi',
            'id': '3'
        },
        {
            'name': 'Waka Waka',
            'artist': 'Shakira',
            'id': '4'
        }
    ]

    const[songName, setSongName] = useState(1)
    const[playButton, setPlayButton] = useState(true)

    const handleForwards = () =>{

        if(songName < data.length){
            setSongName((e => e+1))
        }else{
            setSongName(1)
        }
    }

    const handlePrevious = (e) => {
        if(songName !== 1){
            setSongName(e => e-1)
        }else{
            setSongName(data.length)
        }
    }

    const handlePlayButton = () => {
        setPlayButton(e => !e)
       
    }

    

  return (
    <div className='playlist'>
    {data.map(item => 
        <div className='playlist-container' key={item.id}>
            <span style={item.id == `${songName}`?{'border': 'solid 1px red'}:{'border': 'none'}}>{item.name} --- {item.artist}</span>
        </div>
    )}

    <div className='playlist-buttons'>
    <BiSkipPreviousCircle size={45} onClick={handlePrevious}/>
    {playButton ? <BiPlayCircle  size={45} onClick={handlePlayButton}/>:<BiPauseCircle size={45} onClick={handlePlayButton}/>}
    
    
    <BiSkipNextCircle size={45} onClick={handleForwards}/>
    </div>
        
    </div>
  )
}