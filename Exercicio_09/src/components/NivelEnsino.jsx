import React from "react";

function NivelEnsino({Nivel}){
    if (Nivel === "iniciante"){
        return <h1>Bem-vindo, iniciante!</h1>
    }
    else if(Nivel === "intermediário"){
        return <h1>Você está progredindo!</h1>
    }
    else if (Nivel === "avançado"){
        return <h1>Parabéns, especialista!</h1>
    }
}

export default NivelEnsino