import React, { useState } from 'react';
import './BackgroundDialog.css';
import backgrounds_styles from '../data/backgrounds';

const BackgroundDialog = ({ setBackgroundStyle, backgroundStyle, setShowBackgroundStyle, tempBackground, paperColor, setPaperColor, backgroundFlipped, setBackgroundFlipped }) => {
    const [selectedBackground, setSelectedBackground] = useState(backgroundStyle);

    const handleOkClick = () => {
        setShowBackgroundStyle(false);
    };

    const handleCancel = () => {
        setShowBackgroundStyle(false);
        setBackgroundStyle(tempBackground);
    }
    return (
        <div className="dialog-styles" style={{ width: '25rem' }}>
            <div className="design-dialog-head">
                <h4>Menu Background</h4>
                <div>
                    <button className='dialog-q-button'>?</button>
                    <img alt="" className="dialog-cross" src='images/close-icon.png' onClick={handleCancel}></img>
                </div>
            </div>
            <div className='design-dialog-main'>
                <div className="dialogs">
                    <h5>Backgrounds</h5>
                    <div className="dialogs-content">
                        {backgrounds_styles.map((style) => (
                            <div onClick={() => { setBackgroundStyle(style.path) }} className='dialog-item'
                                key={style.name}
                                style={{
                                    backgroundColor: style.path === backgroundStyle ? 'rgb(201, 197, 197)' : 'transparent'
                                }}

                            >
                                {style.name}
                            </div>

                        ))}
                    </div>
                </div>

            </div>
            <div id="background-margin">
                <p>Margin from edge of menu:</p>
                <input type="text"></input>
            </div>
            <div id="paper-stretch">
                <div id="stretch-fit">
                    <input type="checkbox"></input>
                    <label>Stretch to Fit</label>
                </div>
                <div id="paper-color">
                    <label>Paper Color:</label>
                    <input type="color" value={paperColor} onChange={(e)=>setPaperColor(e.target.value)}></input>
                </div>
            </div>
            <div id="fml">
                <div id="flip">
                    <input type="checkbox" checked={backgroundFlipped} onChange={()=>setBackgroundFlipped(!backgroundFlipped)}></input>
                    <label>Flip</label>
                </div>
                <div id="mirror">
                    <input type="checkbox"></input>
                    <label>Mirror</label>
                </div>
                <div id="lighten">
                    <input type="checkbox"></input>
                    <label>Lighten</label>
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

export default BackgroundDialog;