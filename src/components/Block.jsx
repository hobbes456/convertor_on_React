import {React} from 'react';
import CurrencyPanel from './CurrencyPanel';
import './css/Block.css';

export default function Block({validCurrency, handleCurrency, handleInput, disabled, info}) {
    return (
        <div className='block'>
            <CurrencyPanel validCurrency={validCurrency} handleCurrency={handleCurrency}/>
            <input type="text" disabled={disabled} onInput={(e) => handleInput(e.target.value)}/>
            <div className='info'>{info}</div>
        </div>
    )
}