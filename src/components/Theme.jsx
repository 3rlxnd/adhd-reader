import './Theme.css'
import { useState } from "react";

function Theme() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        // Apply the corresponding class to <body>
        document.body.classList.toggle("dark-theme", newTheme === "dark");
    };

    return <button class="nav_link" aria-label="Theme Toggle Button" onClick={toggleTheme}>
        {theme === "light" ? <i class="fa-solid fa-moon theme-icon"></i> : <i class="fa-solid fa-sun theme-icon"></i>}
    </button>

}

export default Theme
