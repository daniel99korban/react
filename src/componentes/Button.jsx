import React from "react"

// criando um componente
function Buttom(props){

    const {name, onClick} = props;

    return (
        <button onClick={onClick}>{name}</button>
    )
}


export default Buttom;// com default poderei colocar qualqer nome na hora de importa-lo