import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Button from "./componentes/Button"
import ComponenteA from "./componentes/ComponenteA"
import ComponenteB from "./componentes/ComponenteB"

function feedbackClique(){
    alert('Botão foi pressionado');
}

function feedbackComponenteA(){
    alert('ComponenteA foi pressionado');
}

function feedbackComponenteB(){
    alert('ComponenteB foi pressionado');
}

function app(){
    return (
        <div className="app">
            <h1>Olá, Mundo!</h1>
            {/* por padrão de nomeclatura, componentes iniciam com letra Maiuscula*/}
            <Button onClick={()=>feedbackClique()} name="Clique aqui" />
            <ComponenteA onClick ={()=> feedbackComponenteA()} name="ComponenteA">
                <ComponenteB onClick ={()=> feedbackComponenteB()} name="ComponenteB">
                    <Button onClick={()=>feedbackClique()} name="botao normal" />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(app(), rootElement);