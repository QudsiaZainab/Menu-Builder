import React from 'react';
import { useContext } from 'react';
import './AccentsDialog.css';
import Accent1 from '../AccentsImages/Accent1.svg';
import Accent2 from '../AccentsImages/Accent2.svg';
import { AccentContext } from '../App';



const AccentsDialog = ({ formValues, setFormValues, setShowAccents, setHeadingAccent, setHeadingAccentColor, headingAccent, headingAccentColor,
tempAccent, tempAccentColor, tempColorizeAccent }) => {
    const { colorizeAccent, setColorizeAccent } = useContext(AccentContext);
    console.log(colorizeAccent);
    const handleSelectionChange = (selectedValue) => {
        setFormValues({
            ...formValues,
            box_accent: selectedValue,
        });
    };

    console.log(headingAccent);

    const renderAccent = () =>{
        switch(headingAccent){
            case 'Accent1':
                return Accent1;
            case 'Accent2':
                return Accent2;
            default:
                return null;
        }
    }
    console.log(renderAccent)
    return (
        <div className="dialog-styles">
            <div className="design-dialog-head">
                <h4>Accents</h4>
                <div>
                    <button className='dialog-q-button'>?</button>
                    <img alt="" className="dialog-cross" src='images/close-icon.png' onClick={() => { setShowAccents(false);
                    setColorizeAccent(tempColorizeAccent); setHeadingAccent(tempAccent); setHeadingAccentColor(tempAccentColor)  }}></img>
                </div>
            </div>
            <hr />
            <div className='design-dialog-main' style={{ paddingRight: '3rem', paddingLeft: '1rem' }}>
                <div id="title-headings">
                    <p>Title Headings</p>
                    <div className="custom-dropdown" style={{ marginTop: '0' }}>
                        <div className="selected-option">
                            {(headingAccent !== 'none' && headingAccent!=='default') && <img className='dropdown-imgs' src= {renderAccent()} alt={headingAccent} />}
                            <span>{(headingAccent === 'none' || headingAccent === 'default') ? 'none' : ''}</span>
                            <img alt="" id='custom-dropdown-img' src='images/dropdown.png'></img>
                        </div>
                        <ul className="options">
                            <li onClick={() => setHeadingAccent('none')}>
                                none
                            </li>
                            <li onClick={() => setHeadingAccent('Accent1')}>
                                <img className='dropdown-imgs' src={Accent1} alt="image2" />
                            </li>
                            <li onClick={() => setHeadingAccent('Accent2')}>
                                <img className='dropdown-imgs' src={Accent2} alt="image2" />
                            </li>
                        </ul>
                    </div>
                    <div className='colorize'>
                        <input type="checkbox" style={{ marginRight: '0.5rem' }} checked={colorizeAccent} onChange = {()=>setColorizeAccent(!colorizeAccent)}></input>
                        <p style={{ marginRight: '0.5rem' }}>Colorize:</p>
                        <input type='color' value={headingAccentColor} onChange={(e)=>setHeadingAccentColor(e.target.value)}></input>
                    </div>
                </div>
                <div id="normal-headings">
                    <p>Normal Headings</p>
                    <div className="custom-dropdown" style={{ marginTop: '0' }}>
                        <div className="selected-option">
                            {formValues.box_accent !== 'none' && <img className='dropdown-imgs' src={`images/${formValues.box_accent}.png`} alt={formValues.box_accent} />}
                            <span>{formValues.box_accent === 'none' ? 'none' : ''}</span>
                            <img alt="" id='custom-dropdown-img' src='images/dropdown.png'></img>
                        </div>
                        <ul className="options">
                            <li onClick={() => handleSelectionChange('none')}>
                                none
                            </li>
                            <li onClick={() => handleSelectionChange('thick-solid-border')}>
                                <img className='dropdown-imgs' src="images/thick-solid-border.png" alt="image2" />
                            </li>
                        </ul>
                    </div>
                    <div className='colorize'>
                        <input type="checkbox" style={{ marginRight: '0.5rem' }}></input>
                        <p style={{ marginRight: '0.5rem' }}>Colorize:</p>
                        <input type='color'></input>
                    </div>
                </div>
                <div id="sub-headings">
                    <p>Subheadings</p>
                    <div className="custom-dropdown" style={{ marginTop: '0' }}>
                        <div className="selected-option">
                            {formValues.box_accent !== 'none' && <img className='dropdown-imgs' src={`images/${formValues.box_accent}.png`} alt={formValues.box_accent} />}
                            <span>{formValues.box_accent === 'none' ? 'none' : ''}</span>
                            <img alt="" id='custom-dropdown-img' src='images/dropdown.png'></img>
                        </div>
                        <ul className="options">
                            <li onClick={() => handleSelectionChange('none')}>
                                none
                            </li>
                            <li onClick={() => handleSelectionChange('thick-solid-border')}>
                                <img className='dropdown-imgs' src="images/thick-solid-border.png" alt="image2" />
                            </li>
                        </ul>
                    </div>
                    <div className='colorize'>
                        <input type="checkbox" style={{ marginRight: '0.5rem' }}></input>
                        <p style={{ marginRight: '0.5rem' }}>Colorize:</p>
                        <input type='color'></input>
                    </div>
                </div>
            </div>
            <hr />
            <div id="accent-footer">
                <button id="default-style" onClick={()=>setHeadingAccent('default')} style={{cursor:'pointer'}}> Use style defaults</button>
                <div className='dialog-buttons'>
                    <button className='dialog-ok' onClick={() => { setShowAccents(false) }}>OK</button>
                    <button className='dialog-cancel' onClick={() => { setShowAccents(false);
                    setColorizeAccent(tempColorizeAccent); setHeadingAccent(tempAccent); setHeadingAccentColor(tempAccentColor) }}>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default AccentsDialog;