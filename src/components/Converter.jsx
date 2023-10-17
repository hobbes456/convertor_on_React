import { React, useState, useEffect } from 'react';
import Block from './Block';
import ButtonReverse from './ButtonReverse';
import './css/Converter.css';

export default function Converter() {
    const [validCurrency1, setValidCurrency1] = useState('RUB');
    const [validCurrency2, setValidCurrency2] = useState('USD');
    const [inputValue, setInputValue] = useState('0');
    const [resultValue, setResultValue] = useState('0');

    let info = `${inputValue} ${validCurrency1} == ${resultValue} ${validCurrency2}`;
    
    return (
        <div className='converter'>
            <Block 
                validCurrency={validCurrency1}
                handleCurrency={setValidCurrency1}
                handleInput={setInputValue}
                value={inputValue}
                disabled={false}
                info={info}/>

            <ButtonReverse />

            <Block
                validCurrency={validCurrency2}
                handleCurrency={setValidCurrency2}
                value={resultValue}
                disabled={true}
                info={info}/>
        </div>
    )
}