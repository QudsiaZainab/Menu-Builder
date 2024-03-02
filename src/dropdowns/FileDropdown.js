import React from 'react'
import './FileDropdown.css';

const FileDropdown = ({setshowFileDropdown, setMenuItems, setShowPageSetup}) => {
  return (
    <div id = "file-dropdown" onMouseEnter={()=>{setshowFileDropdown(true)}} onMouseLeave={()=>{setshowFileDropdown(false)}}>
        <div class = "file-dropdown-item not-greyed" onClick={()=>{setMenuItems([])}}>New Menu</div>
        <div class = "file-dropdown-item greyed">Open Menu...</div>
        <hr/>
        <div class = "file-dropdown-item greyed">Save Menu</div>
        <hr/>
        <div class = "file-dropdown-item greyed">Rename Menu...</div>
        <div class = "file-dropdown-item greyed">Make a copy</div>
        <div class = "file-dropdown-item greyed">Revert...</div>
        <hr/>
        <div class = "file-dropdown-item not-greyed" onClick={()=>{setShowPageSetup(true); setshowFileDropdown(false)}}>Page Setup...</div>
        <hr/>
        <div class = "file-dropdown-item not-greyed">Create PDF to print</div>
    </div>
  )
}

export default FileDropdown;