import { React, useState } from 'react';
import Block from './Block';
import ButtonReverse from './ButtonReverse';
import './css/Converter.css';

export default function Converter() {
    const [validCurrency1, setValidCurrency1] = useState('RUB');
    const [validCurrency2, setValidCurrency2] = useState('USD');

    return (
        <div className='converter' id='converter'>
            <Block 
                validCurrency={validCurrency1}
                handleCurrency={setValidCurrency1}
                disabled={false}/>
            <ButtonReverse />
            <Block
                validCurrency={validCurrency2}
                handleCurrency={setValidCurrency2}
                disabled={true}/>
        </div>
    )
}