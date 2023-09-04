
import React from 'react'
import './App.css'
import { StateCompo } from './context/StateCompo'
import { TestConection } from './Components/TestConection'



const App =() => {
  return (
    <StateCompo>
      <div>
        <TestConection/>
      </div>

    </StateCompo>
    
    
    
  )
}

export default App
