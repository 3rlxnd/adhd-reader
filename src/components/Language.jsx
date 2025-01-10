import './Language.css'
import { useState } from "react";

function Language() {
    const [theme, setTheme] = useState("light");

    return <button className="nav_link" aria-label="Theme Toggle Button" onClick={null}>
        <i className="fa-solid fa-earth-europe"></i>
        <i className="fa-solid fa-angle-down"></i>
    </button>

}

export default Language
