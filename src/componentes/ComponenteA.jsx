import React from "react"

function ComponenteA(props){

    const {name, onClick} = props;

    return (
        <div>
            <button onClick={onClick}>{name}</button>
            {/*renderizar filho também*/}
            <div>{props.children}</div>
        </div>
    )

}

export default ComponenteA;