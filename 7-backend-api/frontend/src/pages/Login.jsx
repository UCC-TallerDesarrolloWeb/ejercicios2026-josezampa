import '@styles/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if(username == "admin" && password == "admin"){
            console.log("Login ok");
            localStorage.setItem("isLoggedIn", true);
            navigate("/actividades")
        } else{
            console.log("Login mal");
        }
    }

    return (
        <div className="login-container" >
            <form className="login-form" onSubmit={handleLogin}>
                <h2>iniciar sesion</h2>
                <input 
                    type="text" 
                    placeholder="usuario"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
                <input 
                    type="password" 
                    placeholder="contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;