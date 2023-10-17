import { React, useState } from 'react';
import Block from './Block';
import ButtonReverse from './ButtonReverse';
import './css/Converter.css';

export default function Converter() {
    const [validCurrency1, setValidCurrency1] = useState('RUB');
    const [validCurrency2, setValidCurrency2] = useState('USD');
    const [inputValue, setInputValue] = useState('1000');

    const info = validCurrency1 + ' == ' + validCurrency2;

    return (
        <div className='converter' id='converter'>
            <Block 
                validCurrency={validCurrency1}
                handleCurrency={setValidCurrency1}
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