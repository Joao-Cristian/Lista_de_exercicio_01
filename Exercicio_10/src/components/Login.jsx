import React from "react";

function Login ({Logado}){
    if (Logado){
        return <div className="button">
            <button>
            Sair
            </button>
            </div>
    }
    else{
        return <div className="button">
            <button>
            Entrar
            </button>
            </div>
    }
}

export default Login