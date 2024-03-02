import React, {useContext} from 'react'
import { AccentContext } from '../App';

const Accent2 = ({ item , classes }) => {
    const {headingAccent, headingAccentColor, colorizeAccent} = useContext(AccentContext);
	const dynamicStyle = colorizeAccent ? { fill: headingAccentColor } : {};
    return (
        <div>
            {item.type === 'menuHeading' && (
                <div>
                    <div className={classes} style={{ width: 'fit-content' }}>{item.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><svg version="1.1" id="Layer_1" x="0px" y="0px"
                        viewBox="0 0 416 11.314" style={{ enableBackground: 'new 0 0 416 11.314', width: '100%', height: '0.7rem' }}>
                        <style type="text/css">
	{`.s0{fill:#361313; fill-opacity: 1; stroke-opacity: 1;}`}
	{`.s1{fill:none;}`}
	{`.s2{fill:none;stroke:#482525; fill-opacity: 1; stroke-opacity: 1;}`}
</style>
                        <g>
                            <line style = {dynamicStyle} class="s2" x1="0" y1="5.657" x2="416" y2="5.657" />
                            <rect style = {dynamicStyle} class="s1" width="416" height="11.314" />

                            <rect style = {dynamicStyle} x="204" y="1.658" transform="matrix(0.7071 -0.7071 0.7071 0.7071 56.9212 148.7353)" class="s0" width="8.001" height="8" />

                            <rect style = {dynamicStyle} x="219.642" y="3.158" transform="matrix(0.7071 -0.7071 0.7071 0.7071 61.0634 158.7356)" class="s0" width="5.001" height="5" />

                            <rect style = {dynamicStyle} x="191.357" y="3.158" transform="matrix(0.707 -0.7072 0.7072 0.707 52.7973 138.7545)" class="s0" width="5" height="4.999" />
                        </g>
                    </svg></div>
                </div>
            )}
        </div>
    )
}

export default Accent2;