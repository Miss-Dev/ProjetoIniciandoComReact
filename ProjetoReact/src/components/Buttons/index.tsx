import React, { useState } from 'react'
import './style.css'
export default function Button(props: any) {

    let [cont, setCont] = useState(0);

    
    function increment(){
        setCont(cont + 1);
        console.log(cont);
    }
    return (
        <>
            <button className="button_style" onClick={increment}>
                {props.description || "Clique aqui!"}
            </button>
            <p>Clicou {cont} vezes</p>
        </>
    )
}

