import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Block from './Block';
import ButtonReverse from './ButtonReverse';
import './css/Converter.css';

export default function Converter() {
    const [validCurrency1, setValidCurrency1] = useState('RUB');
    const [validCurrency2, setValidCurrency2] = useState('USD');
    const [inputValue, setInputValue] = useState('0');
    const [resultValue, setResultValue] = useState('0');

    let info = `${inputValue} ${validCurrency1} == ${resultValue} ${validCurrency2}`;

    async function fetchCurrency() {
        try {
            const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");

            let value1;
            let value2;

            validCurrency1 === 'RUB' ? value1 = 1 : value1 = response.data.Valute[`${validCurrency1}`].Value;
            validCurrency2 === 'RUB' ? value2 = 1 : value2 = response.data.Valute[`${validCurrency2}`].Value;

                        

        } catch (e) {
            alert(`Ошибка: ${e.name}. Попробуйте перезагрузить страницу или подключитесь позднее.`);
        }
    }

    useEffect(() => {
        fetchCurrency();
    })
    
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