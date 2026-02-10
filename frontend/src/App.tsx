import { useState } from 'react'
import './App.css' 
import Header from './Header'
import UploadBox from './UploadBox'

function App() { //to define my page

  return ( //needed to wrap w/ fragments because of multiple sibling elements
  <div className = "appContainer">
    <Header title= "PandaPal" />
    <p> Welcome to PandaPal! Upload a file to clean data, preview data, or alter column data.</p>
    <UploadBox />
  </div>
)
}
export default App //for use in main.tsx
