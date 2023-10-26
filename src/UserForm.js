import React from 'react';
import { useState } from 'react';



export const UserForm = ()=> {
    const [state, setSate] = useState({
        name: '',
        password: '',
    })


    const handleChange = (e)=> {
        const {name, value} = e.target
        setSate({...state, [name]:value})
    }

    const handleSubmit = (e)=> {
     e.preventDefault()
     console.log('Submitted ' +state.name)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChange}></input>
                <label htmlFor='pass'>Password</label>
                <input name='pass' onChange={handleChange}></input>
                <button type='submit' style={{height:'20px', width:'30px', color:'blue'}}></button>
            </form>
        </>
    )
}

