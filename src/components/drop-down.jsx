import "../style/drop-down.scss"
import { useState } from "react"

export default function DropDown({title, description}){
    const [afficheDescr, setAfficheDescr] = useState(false)
    
    
    return (
        <>
            
                <div onClick={
                    () => setAfficheDescr(!afficheDescr)
                }
                
                className="drop">

                    <div className="drop_header">
                        <div className="drop_header_title">{title}</div>
                        <div className="drop_header_arrow" >
                            <img 
                                src={"/assets/arrow.png"} 
                                alt="fleche" 
                                style={afficheDescr ? {} : {transform: "rotate(180deg)"}}
                            />
                        </div>
                    </div>
                    
                    <div className={afficheDescr ? "open drop_description_container" : "drop_description_container"} id="drop-description">
                        <div className="drop_description">{description}</div>
                    </div>
                </div>
                
            
        </>
        
    )
}