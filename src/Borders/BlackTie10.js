import React from 'react';

const BlackTie10 = ({ color, widt, heigh }) => {
    return (
        <div >
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 560 740" style={{ enableBackground: 'new 0 0 571 751', left: '1.5rem', top: '1.5rem', position: 'absolute', zIndex: '69', width: widt, height: heigh }} xmlSpace="preserve" preserveAspectRatio='none'>
                <style type="text/css">
                    {`.st0{fill:${color};}`}
                </style>
                <path class="st0" d="M553.6,733.6H6.4V6.4h547.2V733.6z M554.6,5.4h-1H6.4h-1v1v727.2v1h1h547.2h1v-1V6.4V5.4z" />
                <path class="st0" d="M543,1c0,8.837,7.164,16,16,16v706c-8.836,0-16,7.164-16,16H17c0-8.836-7.164-16-16-16V17
	c8.836,0,16-7.163,16-16H543 M544,0h-1H17h-1v1c0,8.271-6.729,15-15,15H0v1v706v1h1c8.271,0,15,6.729,15,15v1h1h526h1v-1
	c0-8.271,6.729-15,15-15h1v-1V17v-1h-1c-8.271,0-15-6.729-15-15V0z"/>
            </svg>
        </div>
    );
};

export default BlackTie10;