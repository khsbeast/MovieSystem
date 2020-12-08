import React from 'react';
import wrap from "../../assets/videos/wrap.mp4"

const Player = () => {
    const pause = () => {

    }
    return (
        <div >
            <video
                className="video"
                autoPlay
                controls
                loop
                onScroll={pause}
            >
                <source src={wrap} type="video/mp4" />
            </video>
        </div>
    )

}

export default Player
