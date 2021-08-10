import React from "react"
import "./Section1.css"
import {Button} from "../../../components/Misc/Button/Button"
import HomeImage from "../images/homeImage.png"
import item1 from "../images/item1.png"
import item2 from "../images/item2.png"
import item3 from "../images/item3.png"
import item4 from "../images/item4.png"

const Section1 = () => {


    return (
        <section className="home-section" id="home">
      <div className="landing-container">
        <div className="row h-100 align-items-center align-content-center">
          <div className="home-text">
            <h1>
              Welcome to <span>Pathways</span>
            </h1>
            <h2>Our mission is to help you discover fun ways to learn new skills.</h2>
            <Button linkTo="/signup" title="GET STARTED" />
          </div>
          <div className="home-img">
            <div className="home-img-inner">
              <div className="home-image">
                <div className="home-objects">
                <img src={item1} alt="idea light bulb" />
                  </div>
                <div className="home-objects">
                <img src={item2} alt="idea light bulb" />
                  </div>
                <div className="home-objects">
                <img src={item3} alt="idea light bulb" />
                </div>
                <div className="home-objects">
                <img src={item4} alt="idea light bulb" />
                </div>
              </div>
              <img src={HomeImage} alt="home-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Section1

