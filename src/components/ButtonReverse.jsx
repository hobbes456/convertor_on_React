import { React } from "react";
import imgUrl from '../images/image.png';
import './css/ButtonReverse.css';

export default function ButtonReverse({handleValue}) {
    return (
        <div onClick={() => handleValue()}>
            <img src={imgUrl} alt="" />
        </div>
    )
}