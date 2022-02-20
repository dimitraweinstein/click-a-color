import React from 'react';

interface MagicianProps {
    handleColorClick: () => void;
    pathColor: string;
}

const Magician = ({ handleColorClick, pathColor }: MagicianProps): JSX.Element => {

    const handleChangePathColor = () => {
        console.log('clicked');
    }

    return (
        <svg width="500px" height="500px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g id="Magician">
                {/* hat face and shirt */}
                <path 
                    id="svg_1" 
                    fill={pathColor} 
                    // fill-rule="evenodd" 
                    stroke="#000000" 
                    // stroke-width="8" 
                    strokeMiterlimit="4"
                    onClick={handleColorClick}
                    d="M13.11,32a4.41,4.41,0,0,0,4.41,4.4h1.61V42a8.94,8.94,0,0,0,3.34,7h-1a4.91,4.91,0,0,0-4.9,4.9V56a1,1,0,0,0,1,1H46.44a1,1,0,0,0,1-1V53.86a4.91,4.91,0,0,0-4.9-4.9h-1a8.94,8.94,0,0,0,3.34-7V36.4h1.61a4.4,4.4,0,1,0,0-8.8H46.3L48,12.12A4.61,4.61,0,0,0,43.44,7H20.56A4.61,4.61,0,0,0,16,12.12L17.7,27.6h-.18A4.41,4.41,0,0,0,13.11,32ZM33.29,51,32,52.11,30.71,51Zm12.15,2.9V55H18.56V53.86a2.9,2.9,0,0,1,2.9-2.9h6.26l3.61,3.24a1,1,0,0,0,1.34,0L36.28,51h6.26A2.9,2.9,0,0,1,45.44,53.86ZM42.87,42a7,7,0,0,1-6.95,7H28.08a7,7,0,0,1-6.95-7V36.4H42.87Zm6-10a2.4,2.4,0,0,1-2.41,2.4h-29a2.4,2.4,0,1,1,0-4.8h29A2.4,2.4,0,0,1,48.89,32ZM18.62,9.87A2.57,2.57,0,0,1,20.56,9H43.44A2.61,2.61,0,0,1,46,11.89l-1.21,11H19.18L18,11.89A2.59,2.59,0,0,1,18.62,9.87Zm.78,15H44.6l-.31,2.75H19.71Z" />
                {/* glasses */}
                <path
                    id="svg_2" 
                    fill="#ffffff" 
                    // fill-rule="evenodd" 
                    stroke="#000000" 
                    // stroke-width="8" 
                    strokeMiterlimit="4"
                    onClick={() => console.log('Click2')}
                    d="M27.38,44.84A3.63,3.63,0,0,0,31,41.74a1.77,1.77,0,0,1,2.06,0,3.64,3.64,0,1,0,.29-2.08,3.61,3.61,0,0,0-2.64,0,3.64,3.64,0,1,0-3.3,5.18Zm9.24-5.3A1.65,1.65,0,1,1,35,41.19,1.65,1.65,0,0,1,36.62,39.54Zm-9.24,0a1.65,1.65,0,1,1-1.65,1.65A1.65,1.65,0,0,1,27.38,39.54Z"/>
            </g>
        </svg>
    )
};

export default Magician;