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
                        <div className="drop_header_arrow"><img src="/assets/arrow_back.svg" alt="fleche" /></div>
                    </div>
                    
                    <p className={afficheDescr ? "open drop_description" : "drop_description"}>{description}</p>
                </div>
            
        </>
        
    )
}