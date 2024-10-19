import React from "react";

function ValidacaoEstudante({prop}){
    if (prop){
        return <h1>Você é estudante</h1>
    }
    else{
        return <h1>Você não é um estudante</h1>
    }
}

export default ValidacaoEstudante