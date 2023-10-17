import {React} from 'react';
import './css/CurrencyPanel.css'

export default function CurrencyPanel () {
    return (
        <div className='currencyPanel'>
            <div className="currency">RUB</div>
            <div className="currency">USD</div>
            <div className="currency">EUR</div>
            <div className="currency">GBP</div>
        </div>
    )
}