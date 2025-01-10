import "./Header.css";
import Theme from "./Theme";
import Language from "./Language";

function Header() {
    return <header>
        {/* <img id="logo" src="/logo.png" alt="Logo"/> */}
        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <i id="logo" className="fa-solid fa-eye"></i>
            <p style={{margin: 0}}>ADHD Reader</p>
        </div>
        <nav id="nav">
            <Theme></Theme>
            <Language></Language>
        </nav>
    </header>
}

export default Header