import React from "react"
import "./Team.css"
import jr from "../images/jr.png"
import sj from "../images/sj.png"
import rosie from "../images/rosie.png"


const Team = () => {
    return (
        <>
<div className="title">
    <h1> MEET THE TEAM </h1> 
     </div>
<div className="team-container">
  
        <div className="card">
            <div className="team-content">
                <div className="image">
                <img
                src={rosie}
                alt="home-img"
              />
                </div>
                <div className="info">
                    <h4>Rosie Aranaga-Hill</h4>
                    <h5>Software Engineer</h5>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/rosieahill/" target = "_blank" rel="noreferrer"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/RoseAHill" target = "_blank" rel="noreferrer"><i class="fab fa-github" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="team-content">
                <div className="image">
                <img
                src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=6&m=1168369629&s=612x612&w=0&h=TdA36g-cvBexDNmOIN0oQwZ58x6GPAaXTI_exJQGzqY="
                alt="home-img"
              />
                </div>
                <div className="info">
                    <h4>Junior Adessu</h4>
                    <h5>Software Engineer</h5>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/junioradessu/" target = "_blank" rel="noreferrer"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/Jadessu" target = "_blank" rel="noreferrer"><i class="fab fa-github" 
                    
                    
                    aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="team-content">
                <div className="image">
                <img
                src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=6&m=1168369629&s=612x612&w=0&h=TdA36g-cvBexDNmOIN0oQwZ58x6GPAaXTI_exJQGzqY="
                alt="home-img"
              />
                </div>
                <div className="info">
                    <h4>SJ Gal-Ed</h4>
                    <h5>Software Engineer</h5>
                </div>
                <div className="socials">
                <a href= "https://www.linkedin.com/in/sjgal-ed/" target = "_blank" rel="noreferrer"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/sarahgaled" target = "_blank" rel="noreferrer"><i class="fab fa-github" 
                    
                   
                    
                    aria-hidden="true"></i></a>
                </div>
            </div>
        </div>

    </div>


        </>
      );
}
 
export default Team;