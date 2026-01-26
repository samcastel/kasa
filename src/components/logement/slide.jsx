import { useState } from "react";
import "../../style/slider.scss"

export default function Slide({pictures}){
    const [index, setIndex] = useState(0)
    const previousClick = () => {
        if (index > 0){
            setIndex(index-1)
        } else{
            setIndex(pictures.length-1)
        }    
    }

    const nextClick = () => {
        if (index < pictures.length-1){
            setIndex(index+1)
        } else{
            setIndex(0)
        }
    }
    return(
        <div className="slider">
            <button className="slider__prev" onClick={previousClick}>
                <img src="/assets/arrow.png" alt="fleche" />
            </button>

            <p className="slider__num">{index+1}/{pictures.length}</p>

            <button className="slider__next" onClick={nextClick}>
                <img src="/assets/arrow.png" alt="fleche" />
            </button>
            
            

            <img src={pictures[index]} alt="" />
            
        </div>
    );
}