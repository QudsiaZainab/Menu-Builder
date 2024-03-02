import React from 'react'
import { useContext } from 'react';
import './CityBar.css'
import { AccentContext } from '../../App';
import Accent1 from '../../accents/Accent1';
import Accent2 from '../../accents/Accent2';

const CityBar = ({ item, handleRemoveMenuItem, handleNewButtonClick }) => {
    const { headingAccent, headingAccentColor, colorizeAccent} = useContext(AccentContext);
    const renderAccent = (item) => {
        switch (headingAccent) {
            case 'Accent1':
                return <Accent1 item={item} classes={'cmenu-heading'} />;
            case 'Accent2':
                return <Accent2 item={item} classes={'cmenu-heading'} />;
            case 'none':
                return null;
            case 'default':
                return null;
        }
    }
    return (
        <div>
            <div
                className={`${item.center ? 'center' : ''} ${item.box_accent}`}
                style={{ borderColor: item.box_accent_color }}>
                <div className="close-icon" >
                    <img src="/images/close-icon.png" alt="Close" onClick={() => handleRemoveMenuItem(item.id)} />
                </div>


                {item.type === 'foodItem' && (
                    <div className="cfood-item-name-head" onClick={() => handleNewButtonClick(item.headingID)}>
                        <span className='cfood-item-name-heading'>
                            {item.symbol1 !== 'none' && (
                                <span className="cmenu-symbol">
                                    {item.symbol1}
                                </span>
                            )}
                            {item.symbol2 !== 'none' && (
                                <span className="cmenu-symbol">
                                    {item.symbol2}
                                </span>
                            )}
                            {item.symbol3 !== 'none' && (
                                <span className="cmenu-symbol">
                                    {item.symbol3}
                                </span>
                            )}
                            {item.name}</span>
                        {item.price_with_name && (<span className='cprice'>
                            {item.price}
                        </span>)}
                        <div className='cfood-item-name-description' onClick={() => handleNewButtonClick(item.headingID)}><span>-</span>{item.description}</div>


                        {(item.type === 'foodItem' && !item.price_with_name) && (
                            <span className='cprice'>{item.price}</span>
                        )

                        }
                    </div>
                )}

                {renderAccent(item)}
                {(headingAccent === 'none' || headingAccent === 'default') && item.type === 'menuHeading' && (<div className='cmenu-heading' style={{ width: 'fit-content' }}>{item.name}</div>)}


                {item.extras && (
                    <div className='cextras' onClick={() => handleNewButtonClick(item.headingID)}>
                        {item.extras}
                    </div>
                )}



            </div>
        </div>
    )
}

export default CityBar;