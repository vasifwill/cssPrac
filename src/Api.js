import React from 'react'

export const Api = ({setSelectApi, apiName}) => {
  return (
    <div>
        <div>
            <select onChange={(e)=> setSelectApi(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">female</option>
            </select>
        </div>
        <h3>{apiName}</h3>
    </div>
  )
}
