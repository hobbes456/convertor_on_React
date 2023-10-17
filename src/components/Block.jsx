import {React} from 'react';
import {CurrencyPanel} from './CurrencyPanel';

export default function Block() {
    return (
        <div className='block'>
            <CurrencyPanel />
            <input type="text" value={1000}/>
            <div className='info'>RUB = RUB</div>
        </div>
    )
}