
import "../style/header.scss"
import { Link } from "react-router-dom"
const Header = () => {
    return(
        <header>
            <img src="/assets/LOGO-2.png" alt="logo kaza" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header