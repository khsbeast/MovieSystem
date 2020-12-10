import React from 'react'
import "./last.css"
import popcorn from "../../assets/images/popcorn.gif"
import avenger from "../../assets/images/aveng.jpg"
import clock from "../../assets/images/clock.svg"
import tic from "../../assets/images/tic.svg"

const last = () => {
    return (
        <div>
            <div className="centre">
                <img src={popcorn} width="51px" height="68px" />
                <h2 style={{ paddingTop: "20px" }} >Premiering Today</h2>
                <img src={popcorn} width="51px" height="68px" style={{ paddingLeft: "9px" }} />
            </div>
            <div className="centre">
                <div className="box">
                    <img src={avenger} width="415px" height="553px" style={{ overflow: "hidden", objectFit: "cover" }} />
                    <div style={{ paddingTop: "10px", paddingLeft: "15px" }}>
                        <p className="cardtext">Avengers : Endgame</p>
                        <div style={{ display: "flex", paddingTop: "11px" }}>
                            <img src={clock} width="25px" height="25px" />
                            <p style={{ margin: "0px", paddingLeft: "5px", marginTop: "4px" }} className="cardtext">6-9</p>
                        </div>
                        <div style={{ display: "flex", marginTop: "12px" }}>
                            <img src={tic} width="25px" height="25px" />
                            <p className="cardtext" style={{ paddingLeft: "4px", margin: "0px", marginTop: "3px" }}>₹    150</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center" , marginTop:"20px" , marginBottom:"50px"}}>
              <a href="file:///home/beast/Documents/movieSeats/index.html"> <button> BOOK TICKETS</button></a> 
            </div>

        </div>
    )
}

export default last
