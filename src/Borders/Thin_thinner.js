import React from 'react';

const Thin_thinner = ({color, widt, heigh}) => {
    return (
        <div >
            <svg 
                viewBox="0 0 563.786 743.786" style={{height: heigh, width: widt, enableBackground: 'new 0 0 563.786 743.786',  left:'1.5rem', top: '1.5rem', position: 'absolute', zIndex: '69'}}
                preserveAspectRatio='none'
                >
                <style type="text/css">

                    {`.st0{fill:none;stroke:#000000; fill-opacity: 1; stroke-opacity: 1;stroke-width:0.649;stroke-linecap:round;stroke-miterlimit:10;}`}
                    {`.st1{fill:none;stroke:#000000; fill-opacity: 1; stroke-opacity: 1;stroke-width:2.246;stroke-linecap:round;stroke-miterlimit:10;}`}
                </style>
                <rect style = {{stroke: color}} x="1.123" y="1.123" class="st1" width="561.54" height="741.54" />
                <rect style = {{stroke: color}} x="6.643" y="6.643" class="st0" width="550.5" height="730.5" />
            </svg>
        </div>
    );
};

export default Thin_thinner;