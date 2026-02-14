import { useState } from 'react'
function UploadBox({ fileName, setFileName }: { fileName: string; setFileName: (name: string) => void }) {
    return(
    <div className = "uploadBox">
        <input type= "file" 
        // e for event object
        onChange= {(e) => {
            if(e.target.files && e.target.files.length > 0) {
                setFileName(e.target.files[0].name) //stores the .name property of file in fileName
            }
        }}/>
        <p> {fileName} </p> 
    </div>)
}
export default UploadBox
