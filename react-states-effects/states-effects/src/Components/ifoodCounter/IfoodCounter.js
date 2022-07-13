import { useState, useEffect } from 'react';
import './IfoodCounter.css';

export default function IfoodCounter() {
    const [value, setValue] = useState(0)
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

    useEffect(() => {
        alert('Você não pode mais diminuir itens')
    }, [buttonStyle])

    function down() {
        value === 0 ? setValue(value) : setValue(value - 1)

        if(value <= 1) {
            setButtonStyle("counter-button-minus-desactive")
        }
    }

    function up(){
        setValue(value + 1)
        setButtonStyle("counter-button-minus-active")
    }

    return (
        <div className='countex-wrapper'>
            <button onClick={down} className={buttonStyle}>
                -
            </button>

            <p>{value}</p>

            <button onClick={up} className='counter-button-plus-active'>
                +
            </button>
            <button id='moeda'>12,00</button>
        </div>
    )
}