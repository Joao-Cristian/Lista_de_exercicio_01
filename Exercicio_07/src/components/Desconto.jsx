import React from "react";

function Desconto ({TemDesconto}){
    if(TemDesconto){
        return <h1>Desconto Aplicado</h1>
    }
    else{
        return <h1>Sem Desconto</h1>
    }
}

export default Desconto