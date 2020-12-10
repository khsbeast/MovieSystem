import React from 'react'
import "./card.css"
import op from "../../assets/images/op.jpg"
import op1 from "../../assets/images/1.jpg"
import op2 from "../../assets/images/2.jpg"
import op3 from "../../assets/images/3.jpg"
import op4 from "../../assets/images/4.jpg"
import op5 from "../../assets/images/5.jpg"

import star from "../../assets/images/star.svg"
import play from "../../assets/images/play.svg"

const card = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <div class="card" style={{marginLeft:"15px"}}>
            <img src={op} className="imagee" />
            <div className="sect">
            <p className="cardtext"> Queen Gambit </p>
            <div className="rate">
                <img src={star} width="22px" height="22px" />
                <p className="cardtext" id="cop"> 9.2</p>
            </div>
            </div>
            <div className="conut">
            <img src={play} width="61px" height="61px" style={{padding:"auto"}}/>
            </div>
        </div> 
        <div class="card">
            <img src={op1} className="imagee" />
            <div className="sect">
            <p className="cardtext"> Chicago 7 </p>
            <div className="rate">
                <img src={star} width="22px" height="22px" />
                <p className="cardtext" id="cop"> 9.5</p>
            </div>
            </div>
            <div className="conut">
            <img src={play} width="61px" height="61px" style={{padding:"auto"}}/>
            </div>
        </div> 
        <div class="card">
            <img src={op2} className="imagee" />
            <div className="sect">
            <p className="cardtext"> Pulp Fiction </p>
            <div className="rate">
                <img src={star} width="22px" height="22px" />
                <p className="cardtext" id="cop"> 8.6</p>
            </div>
            </div>
            <div className="conut">
            <img src={play} width="61px" height="61px" style={{padding:"auto"}}/>
            </div>
        </div> 
        <div class="card">
            <img src={op3} className="imagee" />
            <div className="sect">
            <p className="cardtext"> Emily in Paris </p>
            <div className="rate">
                <img src={star} width="22px" height="22px" />
                <p className="cardtext" id="cop"> 8.9</p>
            </div>
            </div>
            <div className="conut">
            <img src={play} width="61px" height="61px" style={{padding:"auto"}}/>
            </div>
        </div> 
        <div class="card">
            <img src={op4} className="imagee" />
            <div className="sect">
            <p className="cardtext"> The Undoing </p>
            <div className="rate">
                <img src={star} width="22px" height="22px" />
                <p className="cardtext" id="cop"> 7.6</p>
            </div>
            </div>
            <div className="conut">
            <img src={play} width="61px" height="61px" style={{padding:"auto"}}/>
            </div>
        </div> 
        <div class="card">
            <img src={op5} className="imagee" />
            <div className="sect">
            <p className="cardtext"> Forrest Gump </p>
            <div className="rate">
                <img src={star} width="22px" height="22px" />
                <p className="cardtext" id="cop"> 8.5</p>
            </div>
            </div>
            <div className="conut">
            <img src={play} width="61px" height="61px" style={{padding:"auto"}}/>
            </div>
        </div> 
        </div>
    )
}

export default card
