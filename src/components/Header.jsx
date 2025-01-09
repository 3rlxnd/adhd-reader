import "./Header.css";
import Theme from "./Theme";
import Language from "./Language";

function Header() {
    return <header>
        {/* <img id="logo" src="/logo.png" alt="Logo"/> */}
        <i id="logo" class="fa-solid fa-eye"></i>
        <nav id="nav">
                <Theme></Theme>
                <Language></Language>
        </nav>
    </header>
}

export default Header