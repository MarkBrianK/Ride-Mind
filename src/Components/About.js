import React from "react";
import facebook from "../Images/fb.png"
import git from "../Images/download.png"
import twitter from "../Images/twitter.png"
import ig from "../Images/ig.jpg"
import linkedin from "../Images/linkedin.jpg"

function About(){
    return(
        <div>
            <h2><span className="span1">Ride </span> and <span className="span2"> Mind </span></h2><br></br><br></br>
            <h3> This web application is intended to follow and give information on how we are keeping up with our vehicles in order to adapt to ozone harming substances discharge which lead to an Earth-wide temperature boost. It is additionally mean to uphold the customary serving of vehicles in order to bring down number of mishaps that are brought about by mechanical disappointments. The information acquired can be utilized by specialists and regulation masters to guarantee that drivers deal with their vehicles and environment. </h3><br></br><br></br>
            <h3>The name Ride and Mind comes from the demonstration of valuing vehicles as a significant method for transport and yet Minding the climate and the mischief that these vehicles can cause to us, people. It is intended to mindfulness that as we move around with our vehicles we likewise need to deal with our current circumstance for a superior presence as individuals.</h3>
            <h2 className="contact">Reach out and contact us on</h2>
            <div className="media">
                <img src={git} alt=""/><br></br>
                <img src={ig} alt=""/><br></br>
                <img src={facebook} alt=""/><br></br>
                <img src={twitter} alt= ""/><br></br>
                <img src={linkedin} alt=""/>
                

            </div>
        </div>
    )
}
export default About