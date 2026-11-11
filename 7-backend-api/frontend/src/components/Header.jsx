import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/")
    }

    return(
        <header>
            <h1>GIMNASIO</h1>
            <nav>
                <a href="/">Home</a>
                { isLoggedIn ? (
                    <button onClick={logout}>cerrar sesion</button>
                ):(
                    <a href="/Login">Login</a>
                )}
                
                <a href="/Actividades">Actividades</a>
                <a href="/poke">Poke</a>
            </nav>
        </header>
    )
}

export default Header;