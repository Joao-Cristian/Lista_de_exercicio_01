import React from "react";

function VerificarIdade({prop}){
    if (prop >= 18){
        return <h1>Você é adulto</h1>
    }
    else{
        return <h1>Você é menor de idade</h1>
    }
}

export default VerificarIdade