import {React} from 'react';
import {CurrencyPanel as Panel} from './CurrencyPanel';

export default function Block() {
    return (
        <div className='block'>
            <Panel></Panel>
            <input type="text" value={1000}/>
            <div className='info'>RUB = RUB</div>
        </div>
    )
}