import React from 'react'
import "./last.css"
import popcorn from "../../assets/images/popcorn.gif"
import avenger from "../../assets/images/aveng.jpg"

const last = () => {
    return (
        <div>
            <div className="centre">
                <img src={popcorn} width="51px" height="68px" />
                <h2 style={{paddingTop:"20px"}} >Premiering Today</h2>
                <img src={popcorn} width="51px" height="68px"/>
            </div>
            <div className="centre">
                <div className="box">
                <img src={avenger} width= "415px" height= "553px" style={{overflow:"hidden",objectFit:"cover"}} />
                <div style={{paddingTop:"10px" , paddingLeft:"15px"}}>
                <p className="cardtext">Avengers : Endgame</p>
                <div> 
                    <p className="cardtext">Avengers : Endgame</p>
                </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default last
