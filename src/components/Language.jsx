import './Language.css'
import { useState } from "react";

function Language() {
    const [theme, setTheme] = useState("light");

    return <button class="nav_link" aria-label="Theme Toggle Button" onClick={null}>
        <i class="fa-solid fa-earth-europe"></i>
        <i class="fa-solid fa-angle-down"></i>
    </button>

}

export default Language
