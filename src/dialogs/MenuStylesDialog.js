import React, { useState } from 'react';
import './MenuStylesDialog.css';

const MenuStylesDialog = ({ menuStyle, setMenuStyle, setSelectedBorderColor, setSelectedBorder, setBackgroundStyle, menuStyles, setShowMenuStyle }) => {
    const [selectedStyle, setSelectedStyle] = useState(menuStyle);
    console.log(selectedStyle);

    const handleOkClick = () => {
        setMenuStyle(selectedStyle);
        setSelectedBorderColor(selectedStyle.borderColor);
        setSelectedBorder(selectedStyle.border);
        setBackgroundStyle(selectedStyle.background);
        setShowMenuStyle(false);
    };

    const handleCancel = () => {
        setShowMenuStyle(false);
        setSelectedStyle(menuStyle);
    }

    return (
        <div className="dialog-styles">
            <div className="design-dialog-head">
                <h4>Menu Style</h4>
                <div>
                    <button className='dialog-q-button'>?</button>
                    <img alt="" className="dialog-cross" src='images/close-icon.png' onClick={handleCancel}></img>
                </div>
            </div>
            <div className='design-dialog-main'>
                <div className="dialogs">
                    <h5>Menu Styles</h5>
                    <div className="dialogs-content">
                        {menuStyles.map((style) => (
                            <div className="dialog-item"
                                key={style.name}
                                style={{
                                    backgroundColor: style.name === selectedStyle.name ? 'rgb(201, 197, 197)' : 'transparent'
                                }}
                                onClick={() => setSelectedStyle(style)}
                            >
                                {style.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div id="column">
                    <h5>In this many columns:</h5>
                    <select
                        name="columns"
                        id="columns-list"
                        value={selectedStyle.columns} // Assuming each style object has a 'columns' property
                        onChange={(e) => setSelectedStyle({ ...selectedStyle, columns: parseInt(e.target.value) })}
                    >
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr />
            <div className='dialog-buttons'>
                <button className='dialog-ok' onClick={handleOkClick}>OK</button>
                <button className='dialog-cancel' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default MenuStylesDialog;
