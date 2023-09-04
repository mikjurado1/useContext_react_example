import React, {useContext} from 'react'
import { counterContext } from '../context/counterContext'


export const TestConection = ({children}) => {

  const {counter, increment} = useContext(counterContext)

  return (  
    <div>
      {children}
      <h4>{counter}</h4>
        <button onClick={()=>
          increment()
        }>Incrementar</button>
      </div>  
  )
}


