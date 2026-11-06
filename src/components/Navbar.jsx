import { useState, useEffect } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [isLight, setIsLight] = useState(
        () => localStorage.getItem("theme") === "light"
    );

    useEffect(() => {

        document.body.classList.toggle("light", isLight);

        localStorage.setItem("theme",
            isLight ? "light" : "dark"
        );
    }, [isLight]);

    function toggleTheme() {
        setIsLight(prev => !prev)
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (

        <>

            <header className="navbar">

                <div className="logo">

                    <img src="/image/lxt.webp" alt="LXT Logo" />

                </div>

                <nav className="nav-links">

                    <a href="#home">Home</a>

                    <a href="#about">About</a>

                    <a href="#skills">Skills</a>

                    <a href="#projects">Projects</a>

                    <a href="#contact">Contact</a>

                </nav>

                <button className="themeBtn" id="themeBtn" onClick={toggleTheme} aria-label="Toggle theme" type="button">

                    {isLight ? "​☾" : "☼"}
                </button>


                <button className={`menu-btn ${menuOpen ? "active" : ""}`} id="menu-btn" onClick={() => setMenuOpen(true)} type="button" aria-label="Open menu" aria-expanded={menuOpen}>

                    ≡
                </button>

            </header>


            <aside className={`mobile-sidebar ${menuOpen ? "active" : ""}`} id="mobile-sidebar">

                <div className="sidebar-header">

                    <span>Menu</span>

                    <button className="close" id="close" onClick={closeMenu} type="button" aria-label="Close menu">
                        ×
                    </button>

                </div>

                <nav className="sidebar-links">

                    <a href="#home" onClick={closeMenu}>Home</a>

                    <a href="#about" onClick={closeMenu}>About</a>

                    <a href="#skills" onClick={closeMenu}>Skills</a>

                    <a href="#projects" onClick={closeMenu}>Projects</a>

                    <a href="#contact" onClick={closeMenu}>Contact</a>

                </nav>

            </aside>


            <div className={`sidebar-overlay ${menuOpen ? "active" : ""}`} id="sidebar-overlay" onClick={closeMenu} />

        </>

    );
}

export default Navbar;