import React from "react";
import facebook from "../Images/fb.png"
import git from "../Images/download.png"
import twitter from "../Images/twitter.png"
import ig from "../Images/ig.jpg"
import linkedin from "../Images/linkedin.jpg"
import green from "../Images/green.jpg"
import Routine from "../Images/routine.jpeg"
import co2  from "../Images/co2.jpg"
import  safety from "../Images/workplace-safety.jpg"
import mantainace from "../Images/mantain.webp"

function About(){
   
    return(
        <div id="about">
            <h2><span className="span1">Ride </span> and <span className="span2"> Mind </span></h2><br></br><br></br>
            <h3> This web application is intended to follow and give information on how we are keeping up with our vehicles in order to adapt to ozone harming substances discharge which lead to an Earth-wide temperature boost. It is additionally mean to uphold the customary serving of vehicles in order to bring down number of mishaps that are brought about by mechanical disappointments. The information acquired can be utilized by specialists and regulation masters to guarantee that drivers deal with their vehicles and environment. </h3><br></br><br></br>
            <h3>The name Ride and Mind comes from the demonstration of valuing vehicles as a significant method for transport and yet Minding the climate and the mischief that these vehicles can cause to us, people. It is intended to mindfulness that as we move around with our vehicles we likewise need to deal with our current circumstance for a superior presence as individuals.</h3>
            <div className="aboutcontent" >
            <img src = {green} alt="" />
            <img src = {Routine} alt="" />
            <img src = {co2} alt="" />
            <img src = {safety} alt="" />
            <img src = {mantainace} alt="" />
            </div>
            
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