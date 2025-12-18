import { Link } from "react-router-dom";

export default function Card({logement}){
    return(
        <Link to={`/logement/${logement.id}`} className="logements__card">
            <img src={logement.cover} alt={logement.title} />
            <p className="logements__card__title">{logement.title}</p>
        </Link>
    )
}