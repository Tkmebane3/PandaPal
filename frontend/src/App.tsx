import { useState } from 'react'
import './App.css' 
import Header from './Header'
import UploadBox from './UploadBox'

function App() { //to define my page
  const [step, setStep] = useState<"upload" | "options">("upload")
  const [fileName, setFileName] = useState("")


  return ( //needed to wrap w/ dividers because of multiple siblings
  <div className = "appContainer">
    <Header title= "PandaPal" />
    <p> Welcome to PandaPal! Upload a file to clean data, preview data, or alter column data.</p>
    <UploadBox fileName={fileName} setFileName={setFileName} />
    <button
      onClick={() => setStep("options")}
      disabled={!fileName}>Next</button>
  </div>
)
}
export default App //for use in main.tsx
