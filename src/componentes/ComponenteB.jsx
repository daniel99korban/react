import React from "react";

function ComponenteB(props){
    
    const {name, onClick} = props;

    return (
        <div>
            <button onClick={onClick}>{name}</button>
            {/* rederizar filho também*/}
            <div>{props.children}</div>
        </div>
    )

}

export default ComponenteB;