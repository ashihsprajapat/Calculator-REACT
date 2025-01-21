import React, { useState } from 'react';
import Btn from "./Btn";

export function Calculator() {
    const [display, setDisplay] = useState('');
    const btns = ['AC', 'del', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 'cal', 0, '.', '='];
    const handleButtonClick = (value) => {
        if (value === 'AC') {
            setDisplay('');
        } else if (value === 'del') {
            setDisplay(prevDisplay => prevDisplay.slice(0, -1));
        } else if (value === '=') {
            // Evaluate the expression if '=' is clicked (optional, you can adjust based on your needs)
            try {
                setDisplay(eval(display).toString());
            } catch (error) {
                setDisplay('Error'); // If there's an error in the expression
            }
        } else {
            // Append the clicked value to the display
            setDisplay(prevDisplay => prevDisplay + value);
        }
    };
    return (
        <>
            <center>
                <div className="calculator_body">


                    <div className="claculor row">
                        <input type="text" value={display} readOnly className="form-control" />

                        {btns.map((el, index) => (
                            <div key={index} className="Btn col-3 col-sm-3 col-md-3 col-lg-3 mb-2">
                                <Btn value={el} onClick={() => handleButtonClick(el)} />
                            </div>
                        ))}


                    </div>
                </div>
            </center>

        </>
    )
}