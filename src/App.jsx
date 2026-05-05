import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

// Navigates to Home page first if needed, then scrolls to section
function NavHashLink({ hash, children }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/");
            // Small delay to let Home mount before scrolling
            setTimeout(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
            }, 120);
        } else {
            document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <a href={hash} onClick={handleClick}>
            {children}
        </a>
    );
}

function App() {
    const location = useLocation();

    return (
        <div className="app">
            <nav className="navbar">
                <Link to="/" className="logo">MyPortfolio</Link>
                <div className="nav-links">
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                    <NavHashLink hash="#about">About</NavHashLink>
                    <NavHashLink hash="#projects">Projects</NavHashLink>
                    <NavHashLink hash="#contact">Contact</NavHashLink>
                    <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default App;
