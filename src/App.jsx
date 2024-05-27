import React from 'react'
import Navbar from './Components/Navbar';
import Newsboard from './Components/Newsboard';
import { useState } from 'react';

const App = () => {
  const [category,setCategory]=useState("general");


  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    
      
    </div>
  )
}

export default App
