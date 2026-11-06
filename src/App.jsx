import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <footer className="footer">

                <p>© 2026 Lakshit Tak, All rights reserved</p>

                <p>Built with React, CSS & JavaScript.</p>

            </footer>
        </>
    );
}

export default App;