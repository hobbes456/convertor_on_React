import { React, useState, useEffect } from 'react';
import Block from './Block';
import ButtonReverse from './ButtonReverse';
import './css/Converter.css';

export default function Converter() {
    const [validCurrency1, setValidCurrency1] = useState('RUB');
    const [validCurrency2, setValidCurrency2] = useState('USD');
    const [inputValue, setInputValue] = useState('1000');

    let info = `${validCurrency1} == ${validCurrency2}`;
    let resultValue = 0;

    
    return (
        <div className='converter' id='converter'>
            <Block 
                validCurrency={validCurrency1}
                handleCurrency={setValidCurrency1}
                handleInput={setInputValue}
                disabled={false}
                info={info}/>
            <ButtonReverse />
            <Block
                validCurrency={validCurrency2}
                handleCurrency={setValidCurrency2}
                disabled={true}
                info={info}/>
        </div>
    )
}