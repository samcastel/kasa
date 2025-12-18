import Header from '../components/header'
import Footer from '../components/footer'
import {useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Page404 from './Page404'
import { fetchData } from '../components/data'
import Slide from '../components/logements/slide'

export default function FicheLogement(){
    const params = useParams()
    const [logement, setLogement] = useState("Chargement")

    useEffect(() => {
            fetchData().then((data) => {
                setLogement(data.find((element) => element.id === params.id))
                // 1- logement trouvé
                // 2- useEffect pas encore déclenché (se déclenche une fois le composant monté)
                // 3- Logement pas trouvé (page 404)
            })
        }, [])

    if (logement === "Chargement"){
        return null
    }

    if (!logement){
        return(
            <Page404 />
        )
    }

    return(
        <main>

            <Header />
            <section>
                {logement.title}
                <Slide pictures={logement.pictures} />
            </section>
            <Footer />
        </main>
    )
}