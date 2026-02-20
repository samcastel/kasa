import Header from '../components/header'
import Footer from '../components/footer'
import {useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Page404 from './Page404'
import { fetchData } from '../components/data'
import Slide from '../components/logement/slide'
import "../style/ficheLogement.scss"
import Rating from '../components/logement/rating'
import DropDown from '../components/drop-down'

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
            <section className='fiche-logement'>
                <Slide pictures={logement.pictures} />
                <div className='fiche-logement__infoGeneral'>

                    <div className='fiche-logement__infoDescription'>
                        <p className='fiche-logement__title'>{logement.title}</p>
                        <p className='fiche-logement__location'>{logement.location}</p>
                        {logement.tags.map(tag => <div className='fiche-logement__tag'>{tag}</div>)}
                    </div>
                    
                    <div className='fiche-logement__right'>
                        <div className='fiche-logement__host'>
                            <p className='fiche-logement__host__name'>{logement.host.name}</p>
                            <img className='fiche-logement__host__picture' src={logement.host.picture ? logement.host.picture : "/assets/Host.png"} alt="" />
                        </div>
                        <Rating rating={Number(logement.rating)}/>
                    </div>
                </div>
                <div className='fiche-logement__additional-info'>
                    <DropDown title={"Description"} description={logement.description}/>
                    <DropDown title={"Équipements"} description= 
                        {
                            (logement.equipments).map
                                ((equipment) => 
                                    <ul>
                                        <li>{equipment}</li>
                                    </ul>
                                )
                        }
                    />
                </div>
            </section>
            <Footer />
        </main>
    )
}