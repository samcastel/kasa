import "../style/home.scss"
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from "../components/banner"
import { useEffect, useState } from "react"
import { fetchData } from "../components/data"
import Card from "../components/logements/card"


export default function Home(){
    const [logements, setLogements] = useState([])
    useEffect(() => {
        fetchData().then((data) => {
            setLogements(data)
        })
    }, [])
    return (
    <main>
        <div>
            <Header />
            <Banner titre={"Chez vous, \npartout et ailleurs"} img={"/assets/IMG.png"} opacity={0.6}/>
        </div>
        <section className="logements__container">
            {logements.map((logement) => (
                <Card key={logement.id} logement={logement}/>
            ))}
        </section>
        <div>
            <Footer />
        </div>    
    </main>
    )
}