import React, { useState, useEffect } from 'react'
import './PageSetupDialog.css'

export const PageSetupDialog = ({ setShowPageSetup, setPageWidth, setPageHeight, setSelectedPage,
   selectedPage, orientation, setOrientation, pageWidth, pageHeight,
  customWidth, customHeight, setCustomWidth, setCustomHeight }) => {

    const [w, setW] = useState(customWidth);
    const [h, setH] = useState(customHeight);

    console.log(customWidth);

  // Function to handle radio button selection
  const handleOptionChange = (event) => {
    setOrientation(event.target.value);
  };
  console.log(selectedPage);

  useEffect(() => {
    if (selectedPage === "Letter") {
      setPageWidth("8.5in");
      setPageHeight("11in");
    } else if (selectedPage === "Legal") {
      setPageWidth("8.5in");
      setPageHeight("14in");
    }
    else if(selectedPage === "Tabloid"){
      setPageWidth("11in");
      setPageHeight("17in")
    }
    else if(selectedPage === "C-Sheet"){
      setPageWidth("17in");
      setPageHeight("22in");
    }
    else if(selectedPage === "Statement"){
      setPageWidth("5.5in");
      setPageHeight("8.5in");
    }
    else if(selectedPage === "A3"){
      setPageWidth("11.69in");
      setPageHeight("16.54in");
    }
    else if(selectedPage === 'A4'){
      setPageWidth("8.67in");
      setPageHeight("11.69in");
    }
    else if(selectedPage === 'A5'){
      setPageWidth('5.83in');
      setPageHeight('8.27in')
    }
    else if(selectedPage === 'Custom') {
      setPageWidth(customWidth);
      setPageHeight(customHeight);
    }
    if (orientation === "landscape"){
      var w = pageWidth;
      setPageWidth(pageHeight);
      setPageHeight(w);
    }

    
  }, [selectedPage, setPageHeight, setPageWidth, orientation, customWidth, customHeight]);
  return (
    <div className='dialog-styles' style={{ width: '30rem' }}>
      <div className="design-dialog-head" >
        <h4>Page Setup</h4>
        <div>
          <button className='dialog-q-button'>?</button>
          <img alt="" className="dialog-cross" src='images/close-icon.png' onClick={() => { setShowPageSetup(false) }}></img>
        </div>
      </div>
      <div className='design-dialog-main' id="page-setup">
        <div id="page-setup-left">
          <h5>Orientation</h5>
          <div className="orn">
            <input
              type="radio"
              id="portrait"
              name="orientation"
              value="portrait"
              checked={orientation === "portrait"}
              onChange={handleOptionChange}
            />
            <label htmlFor="portrait">Portrait</label>
          </div>
          <div className="orn" style={{ marginBottom: '1rem' }}>
            <input
              type="radio"
              id="landscape"
              name="orientation"
              value="landscape"
              checked={orientation === "landscape"}
              onChange={handleOptionChange}
            />
            <label htmlFor="landscape">Landscape</label>
          </div>
          <h5>Paper Size</h5>
          <select
            style={{ marginBottom: '0.5rem' }}
            id="selectPage"
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
          >
            <option value="Letter">Letter</option>
            <option value="Legal">Legal</option>
            <option value="Tabloid">Tabloid</option>
            <option value = "C-Sheet">C-Sheet(17"x22")</option>
            <option value = "Statement">Statement(5.3"x8.5")</option>
            <option value = "A3">A3</option>
            <option value = "A4">A4</option>
            <option value = "A5">A5</option>
            <option value = "Custom">Custom</option>
          </select>

          <div className='paper-size' >
            <label style={{ marginRight: '0.7rem' }}>Custom width: </label>
            <input type="text" value={customWidth} onChange={(e) => setCustomWidth(e.target.value)}></input>
          </div>
          <div className='paper-size'>
            <label>Custom height:</label>
            <input type="text" value={customHeight} onChange={(e) => setCustomHeight(e.target.value)}></input>
          </div>
        </div>
        <div id="page-setup-right">
          <h5>Margins</h5>
          <div className='paper-size'>
            <label style={{ marginRight: '2rem' }}>top:</label>
            <input type="text"></input>
          </div>
          <div className='paper-size'>
            <label >bottom:</label>
            <input type="text"></input>
          </div>
          <div className='paper-size'>
            <label style={{ marginRight: '2rem' }}>left:</label>
            <input type="text"></input>
          </div>
          <div className='paper-size'>
            <label style={{ marginRight: '1.4rem' }}>right:</label>
            <input type="text"></input>
          </div>
        </div>
      </div>
      <hr />
      <div id="accent-footer">
        <button id="default-style" > Use style defaults</button>
        <div className='dialog-buttons'>
          <button className='dialog-ok' onClick={() => { setShowPageSetup(false) }}>OK</button>
          <button className='dialog-cancel' onClick={() => { setShowPageSetup(false) }}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default PageSetupDialog;