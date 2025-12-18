import "../style/page404.scss"
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from "react-router-dom"

export default function Page404(){
    return(
        <main>

            <div className='page-content'>
                <Header />
                <div className="e404-content">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/" id="retour-accueil">Retourner sur la page d’accueil</Link>
                </div>
            </div>

            <Footer />
        </main>
    )
}