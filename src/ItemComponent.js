import React from "react";

export default function ItemComponent(props){
    const status = props.status;

    return <li> { props.name }
            <div>
                Status: {status ? <div>Check</div> : <div>Não comprei</div> } 
            </div>
        </li>

}