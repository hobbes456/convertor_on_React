import {React} from 'react';
import './css/CurrencyPanel.css';

export default function CurrencyPanel ({validCurrency, handleCurrency}) {

    const currentList = ['RUB', 'USD', 'EUR', 'GBP'].map(
        item => <div
            className={validCurrency === item ? 'currency valid' : 'currency'}
            key={item}
            onClick={() => handleCurrency(item)}
        >{item}</div>
    )

    return (
        <div className='currency__panel'>{currentList}</div>
    )
}