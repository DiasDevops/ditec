
import { useState } from "react";

function Login(){
    const [log, setLog] = useState(false);

    const login = ()=>{
        alert("Usuário Logado com Sucesso !");
    }

    const logout = ()=>{
        alert("Usuário saiu do sistema!");
    }

    return(
        <div>
            <p>{!log?logout():login()}</p>
             <button onClick={()=>setLog(!log)}>{!log?"Logout":"Login"}</button>
        </div>
    );
}

export default Login;