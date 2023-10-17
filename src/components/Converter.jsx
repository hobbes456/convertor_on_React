import { React } from 'react';
import Block from './Block';
import ButtonReverse from './ButtonReverse';
import './css/Converter.css';

export default function Converter() {
    return (
        <div className='converter' id='converter'>
            <Block />
            <ButtonReverse />
            <Block />
        </div>
    )
}