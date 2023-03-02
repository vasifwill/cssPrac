import React from 'react'

export const Form = ({HandleForm, form, formButton, handleFormSubmit}) => {



  return (
    <>
      <div className='format'>
        <form className='format-1' onSubmit={handleFormSubmit} >
        <label>First Name</label>
          <input  onChange={HandleForm} name="firstName"></input>
          <label>Last Name</label>
          <input onChange={HandleForm} name="lastName"></input>
          <label>Email</label>
          <input onChange={HandleForm} name="email"></input>
          <label >Age</label>
          <select onChange={HandleForm} name="age">
            <option value="11-17">11-17</option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
          </select>
          <button  type="submit" className='buttonForm'>Submit</button>
          </form>
        <div className='format-2'>
        {formButton ? (<>
        <h1>First name: {form.firstName}</h1>
        <h1>Last Name : {form.lastName}</h1>
        <h1>Email : {form.email}</h1>
        <h1>Age: {form.age}</h1></>): <><h1>no addition</h1></> }
        </div>
        
      </div>
    </>
  )
}
