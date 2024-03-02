import React from 'react';
import './DesignDropdown.css';

const DesignDropdown = ({setShowAccents, setDesignDropdown, setShowMenuStyle, setShowBackgroundStyle, setShowBorder, setTempBorder, selectedBorder, setTempBackground, backgroundStyle, 
setTempAccent, setTempAccentColor,setTempColorizeAccent, headingAccent, headingAccentColor, colorizeAccent }) => {
    return (
        <div id="design-dialog" onMouseEnter={()=>{setDesignDropdown(true)}} onMouseLeave={()=>{setDesignDropdown(false)}}>
            <li onClick={()=>{setShowMenuStyle(true);setDesignDropdown(false); setShowBorder(false); setShowBackgroundStyle(false)}}>Switch Menu Styles</li>
            <hr/>
            <li onClick={()=>{setShowBackgroundStyle(true);setDesignDropdown(false); setTempBackground(backgroundStyle); setShowMenuStyle(false); setShowBorder(false)}}>Background...</li>
            <li onClick={()=>{setShowBorder(true);setDesignDropdown(false); setTempBorder(selectedBorder); setShowBackgroundStyle(false); setShowMenuStyle(false)}}>Border...</li>
            <li onClick={()=>{setShowAccents(true); setDesignDropdown(false);
            setTempColorizeAccent(colorizeAccent); setTempAccent(headingAccent); setTempAccentColor(headingAccentColor)}}>Accents...</li>
            <hr/>
            <li>Layout options...</li>
            <li>Price options...</li>
            <li>Symbol options...</li>
            <hr/>
            <li>Chalkboard</li>
            <li>Colorswitch</li>
        </div>
    )
}

export default DesignDropdown;