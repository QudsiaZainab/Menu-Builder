import React from 'react'
import './NineteenEastMain.css';
import { useContext } from 'react';
import Accent1 from '../../accents/Accent1';
import Accent2 from '../../accents/Accent2';
import { AccentContext } from '../../App';

const NineteenEastMain = ({ item, handleRemoveMenuItem, handleNewButtonClick }) => {
    const {headingAccent, headingAccentColor, colorizeAccent} = useContext(AccentContext);

    console.log(headingAccent);
    const renderAccent = (item) => {
        switch (headingAccent) {
            case 'Accent1':
                return <Accent1 item={item} classes={'menu-heading'}/>;
            case 'Accent2':
                return <Accent2 item={item} classes={'menu-heading'}/>;
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
                    <div className="food-item-name-head" onClick={() => handleNewButtonClick(item.headingID)}>
                        <div className='food-item-name-heading'>
                            {item.symbol1 !== 'none' && (
                                <span className="menu-symbol">
                                    {item.symbol1}
                                </span>
                            )}
                            {item.symbol2 !== 'none' && (
                                <span className="menu-symbol">
                                    {item.symbol2}
                                </span>
                            )}
                            {item.symbol3 !== 'none' && (
                                <span className="menu-symbol">
                                    {item.symbol3}
                                </span>
                            )}
                            {item.name}</div>
                        {((item.price_with_name && item.center) || (!item.price_with_name && !item.center)) && (<div className='price'>
                            {item.price}
                        </div>)}
                    </div>
                )}


                {renderAccent(item)}
                {(headingAccent === 'none' || headingAccent === 'default') && item.type === 'menuHeading' && (<div className='menu-heading' style={{ width: 'fit-content' }}>{item.name}</div>)}


                <div className='food-item-name-description' onClick={() => handleNewButtonClick(item.headingID)}>{item.description}</div>
                {item.extras && (
                    <div className='extras' onClick={() => handleNewButtonClick(item.headingID)}>
                        <span>+</span>
                        {item.extras}
                    </div>
                )}

                {(item.type === 'foodItem' && item.center && !item.price_with_name) && (
                    <div className='price'>{item.price}</div>
                )

                }

            </div>
        </div>
    )
}

export default NineteenEastMain;