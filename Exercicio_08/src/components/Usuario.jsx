import React from "react";

function Usuario({Status}){
    if (Status) {
        return <h1>Usuário online</h1>
    }
    else{
        return <h1>Usuário offline</h1>
    } 
}

export default Usuario