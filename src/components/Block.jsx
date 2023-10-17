import {React} from 'react';
import CurrencyPanel from './CurrencyPanel';
import './css/Block.css'

export default function Block() {
    return (
        <div className='block'>
            <CurrencyPanel />
            <input type="text"/>
            <div className='info'>RUB = RUB</div>
        </div>
    )
}