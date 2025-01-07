import "./Header.css";

function Header() {
    return <header>
        {/* <img id="logo" src="/logo.png" alt="Logo"/> */}
        <h1>ADA</h1>
        <nav id="nav">
                <a aria-label="Coverter" href="/interface" className="nav_link">Coverter</a>
                <a href="/docs" className="nav_link">Language</a>
        </nav>
    </header>
    
}

export default Header