import {React} from 'react';
import CurrencyPanel from './CurrencyPanel';
import './css/Block.css';

export default function Block({validCurrency, handleCurrency, handleInput, value, disabled, info}) {
    return (
        <div className='block'>
            <CurrencyPanel
                validCurrency={validCurrency}
                handleCurrency={handleCurrency}/>

            <input
                type="text"
                value={value}
                disabled={disabled}
                onInput={(e) => handleInput(e.target.value)}/>


            <div className='info'>{info}</div>
        </div>
    )
}