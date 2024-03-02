import React, { useState } from 'react';
import './BorderDialog.css';
import borders from '../data/borders';

const BorderDialog = ({ setSelectedBorder, selectedBorder, setShowBorder, setSelectedBorderColor, selectedBorderColor, tempBorder}) => {
    

    const handleOkClick = () => {
        setShowBorder(false);
    };

    const handleCancel = () => {
        setShowBorder(false);
        setSelectedBorder(tempBorder);
    }
    const handleBorderColorChange = (event) => {
        setSelectedBorderColor(event.target.value);
    };
    return (
        <div className="dialog-styles">
            <div className="design-dialog-head">
                <h4>Menu Borders</h4>
                <div>
                    <button className='dialog-q-button'>?</button>
                    <img alt="" className="dialog-cross" src='images/close-icon.png' onClick={handleCancel}></img>
                </div>
            </div>
            <div className='design-dialog-main'>
                <div className="dialogs">
                    <h5>Borders</h5>
                    <div className="dialogs-content">
                        {borders.map((style) => (
                            <div onClick={() => { setSelectedBorder(style.element) }} className='dialog-item'
                                key={style.name}
                                style={{
                                    backgroundColor: style.element === selectedBorder ? 'rgb(201, 197, 197)' : 'transparent'
                                }}
                            >
                                {style.name}
                            </div>

                        ))}

                    </div>
                </div>
                <div id = "color-selection">
                    <h5 >Colorize:</h5>
                    <input type="color" value={selectedBorderColor} onChange={handleBorderColorChange} />

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

export default BorderDialog;