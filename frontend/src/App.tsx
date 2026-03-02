import { useState } from 'react'
import './App.css' 
import Header from './Header'
import UploadBox from './UploadBox'

function App() { //to define my page
  const [step, setStep] = useState<"upload" | "options">("upload")
  const [fileName, setFileName] = useState("")
  const [selectedAction, setSelectedAction] = useState<"clean" | "">("")
  
  return ( //needed to wrap w/ dividers because of multiple siblings
    <div className="appContainer">
    <Header />
    {step === "upload" && (
    <>
      <p>Welcome to PandaPal! Upload a file to clean data...</p>
      <UploadBox fileName={fileName} setFileName={setFileName} />
      <button
        onClick={() => setStep("options")}
        disabled={!fileName}
      >Next</button>
    </>
    )}
  {step === "options" && (
    <div className="menu">
      <p className="menu-title">Choose an action:</p>
      <button
        className={selectedAction === "clean" ? "menu-btn active" : "menu-btn"}
        onClick={() => setSelectedAction("clean")}
      >Clean Data (remove empty fields, delete duplicates)</button>
    </div>
    )}
</div>
)}
export default App //for use in main.tsx
