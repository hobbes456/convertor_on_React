import {React} from 'react';
import CurrencyPanel from './CurrencyPanel';
import './css/Block.css';

export default function Block({validCurrency, handleCurrency, value, disabled}) {
    return (
        <div className='block'>
            <CurrencyPanel validCurrency={validCurrency} handleCurrency={handleCurrency}/>
            <input type="text" value={value} disabled={disabled}/>
            <div className='info'>RUB = RUB</div>
        </div>
    )
}