
import "../style/banner.scss"

function Banner({titre, img, opacity}){
    return(
        <section>
            <img className="banner-img" src={img} alt="photo-falaise" />
            <div className="banner-mask" style={{opacity}}>
                {titre}
            </div>
        </section>
        
    )
}

export default Banner