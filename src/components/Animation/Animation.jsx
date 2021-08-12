import React from "react";
import Lottie from 'react-lottie-player'
import Learn from "../../assets/learn.json"

const Animation = (props) => {

    return (
        <div style={{width: "300px"}}>
            <Lottie
                loop
                animationData={Learn}
                play
                speed={1}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    )
}
export default Animation