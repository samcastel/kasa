import DropDown from "../components/drop-down"
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'


const data = [
    {
        title: "Fiabilité", 
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title: "Fiabilité", 
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title: "Fiabilité", 
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    }
]

const About = () => {
    return (
    <main>
      <div className='page-content'>
        <Header />
        <Banner />
        {data.map((element) => <DropDown title={element.title}/> )}
      </div>
      <Footer />
    </main>
  )
}

export default About