import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function somar(x, y){
    return x + y;
}

function subtrair(x, y){
    return x - y;
}

function multiplicar(x, y){
    return x * y;
}
function dividir(x, y){
    return x / y;
}

const primeiroJsx = () => {
    return "Calculadora!";
}

const app = () => {

    return (
        <div className="app">
            <h1>{primeiroJsx()}</h1>
            <p>12 e 3</p>
            <h1 className="color-green">Soma: {somar(12, 3)}</h1>
            <h1 className="color-yellow">Subtração: {subtrair(12, 3)}</h1>
            <h1 className="color-red">Multiplicação: {multiplicar(12, 3)}</h1>
            <h1 className="color-orange">Divisão: {dividir(12, 3)}</h1>
        </div>
    )

}

const rootElement = document.getElementById("root")
// desenho app na div root 
ReactDOM.render(app(), rootElement);
// exemplo de JSX
//const element  = <h1>Hello, world</h1>
//o browser não suporta JSX sem um transpilador o reactscript ja configura isso de forma automatica utilizando o babel. 
