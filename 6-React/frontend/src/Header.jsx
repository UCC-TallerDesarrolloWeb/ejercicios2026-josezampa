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
                <a href="/">home</a>
                { isLoggedIn ? (
                    <button onClick={logout}>cerrar sesion</button>
                ):(
                    <a href="/Login">login</a>
                )}
                
                <a href="/Actividades">actividades</a>
            </nav>
        </header>
    )
}

export default Header;