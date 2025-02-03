import React, { useState, useEffect } from 'react'
import '../Ifoodcounter/IfoodCounter.css'

export default function IfoodCounter() {
    
    // facilitando a mudança dos valores com useState
    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

    // useEffect é o efeito colateral da mudança do valor de value
    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.00 * value
    },[value])

    // função para diminuir o valor e desativar o botão de menos
    function down() {
        if( value <= 1) {
            setButtonStyle("counter-button-minus-desactive")
        }

        if( value > 0 ) {
            setValue(value - 1)
        }
    }

    // Função para aumentar o valor e ativar o botão de menos
    function up() {
        setValue(value + 1)
        setButtonStyle("counter-button-minus-active")
    }

    // REACT
    return (
        // Contador
        <div className="countex-wrapper">
            <button 
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>
            <p>{value}</p>
            <button 
                className="counter-button-plus-active"
                onClick={up}
            >
                +
            </button>

            {/** Valor em reais alterado usando UseEffect pelo contador */}
            <button id="moeda">2</button>
        </div>
    )
}