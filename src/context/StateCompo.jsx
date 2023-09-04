import React, { useState } from 'react'
import { counterContext } from "./counterContext";


export const StateCompo = ({children}) => {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter((prev) => prev + 1);
    }
  return (
    <counterContext.Provider
    value={{
        counter,
        increment
    }}
    >
        {children}
    </counterContext.Provider>
  )
}




