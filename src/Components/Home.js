import React from "react";
import "../App.css"
import exhaust from "../Images/exhaust.jpg"
import greencar from "../Images/leaf.jpg"
import oil from "../Images/oil.jpeg"
import bus from "../Images/bus.jpeg"
import mechs from "../Images/mainatainance.jpg"
function Home(){
    return(
        <div className="grid-container">
            <div>
                <h2> Global warming is termed as the unusual rapid increase in the Earth's average surface temperature due to the increase in the amount of greenhouse gases released to the atmosphere by burning fossil fuels. Its effect has led to the unpredictable changes in weather such as <important>Prolonged droughts, heavy storms,rising sea levels,melting glaciers and warming oceans</important>.It has been put in record that the year 2020 was one of the hotest year which should be a concern to the world as Global warming is proving to be a threat. </h2>
            </div>
            <div> <img src={greencar} alt=""/></div>
            <div>
            <img src={exhaust} alt=""/>
            </div>
            <div>
                <h2> The main contributor to Global warming are the greenhouse gases which include carbon dioxide, methane, nitrous oxide, and water vapor. Vehicles have proven to be one of the most emitters of ggreenhouse gases such as  nitrogen oxide, non-methane organic gases, carbon monoxide, particulate matter, and formaldehyde. Vehicles account for about one-fifth of the total carbon emitted in to the atmosphere which can be significally reduced if we regulary sreviced our vehicles. </h2>
            </div>
            <div>
                <h2>Appropriate overhauling and upkeep of your vehicles can diminish your vehicles' ozone harming substances discharge. This can be accomplished by diminishing a vehicles' gas mileage. Gas mileage can be alluded as the quantity of miles that a vehicle can travel utilizing a specific measure of fuel. Supplanting stopped up air channels will assist with further developing the gas mileage by as much as 10% and safeguard the motor. Utilization of suggested grade of engine oil for your vehicle can bring down gas mileage by around 1 to 2 percent. Appropriately swelling an adjusting your tires can further develop gas mileage by around 3.3 percent. Normal check ups can further develop gas mileage by 4 to 12 percent. Lessening gas mileage will decrease how much gases discharged by mile.</h2>
            </div>
            <div>
                <img src={oil} alt=""/>
            </div>
            <div>
                <img src={bus} alt=""/>
            </div>
            <div>
                <h2>Over the course of the last many years, engine vehicles have turned into the essential method of transportation in agricultural nations. Simultaneously an improvement in car designing and assembling as well as the peculiarities of urbanization have brought about additional vehicles investing more energy in the street at higher velocities. Perpetually this prompts driving situations where security basic moves must be played out that depend on the mechanical state of the vehicles.14% of mishaps are brought about by mechanical disappointment and when they happen they can be exceptionally terrible and can bring about many lives being lost.</h2>
            </div>
            <div>
                <h2>Keeping track of how often drivers keep their vehicles checked and maintained is important and would help reduce the percentage of the number of accidents caused by this mechanical failures which would result in saving a lot of lives.</h2>
            </div>
            <div>
                <img src={mechs} alt = ""/>
            </div>
        </div>
    )
}
export default Home