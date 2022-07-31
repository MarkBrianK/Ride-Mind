import React, { useState } from "react";

function AddVehicle({ handleNew, handleDisplay }) {
  const [vehicle, SetVehicle] = useState("");
  const [image, setImage] = useState("");
  const [vehicleRegistration, setVehicleRegistartion] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState("");
  const [model, setModel] = useState("");
  const [lastService, setLastService] = useState("");
  const [nextService, setNextServive] = useState("");
  
  function handleImage(event) {
    setImage(event.target.value);
    
  }

  function handleRegistartion(event) {
    setVehicleRegistartion(event.target.value);
  }

  function handleManufacture(event) {
    setYearOfManufacture(event.target.value);   
  }
  function handleModel(event) {
    setModel(event.target.value);
   
  }
  function handleLastService(event) {
    setLastService(event.target.value);
   
  }
  function handleNextService(event) {

    setNextServive(event.target.value);
   
  }


  function handleSubmit(e) {
    e.preventDefault();

    if(nextService === ''){
      alert('Enter Expected Next Service')
    }
    else if(image===''){
      alert('Enter vehicle image')
    }
    else if(vehicleRegistration===''){
      alert('Enter vehicle Registration')
    }
    else if(yearOfManufacture===''){
      alert('Enter Year of Manufacture')
    }
    else if(model === ''){
        alert('Enter Vehicle Model')
    }
    else if(lastService === ''){
        alert('Enter Last Service')
    
    }
    else{
      console.log(vehicle);
      const newVehicle = {
        vehicleRegistration: vehicleRegistration,
        image:image,
        yearOfManufacture: yearOfManufacture,
        model: model,
        lastService:lastService,
        nextService:nextService
      };
  
      console.log(newVehicle);
      fetch("https://rideapi.herokuapp.com/Mantainance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVehicle),
      })
        .then((r) => r.json())
        .then((newcar) => {
          handleNew(newcar);
          SetVehicle("");
          setImage("");
          setVehicleRegistartion("");
          setYearOfManufacture("");
          setModel("");
          setLastService("");
          setNextServive("")
        });
  
      handleDisplay()

    }
    

;
  }

  const AddCar = (
    <div className="form-style-8" id="formDiv">
      <h2>Add a vehicle </h2>
      <form id="formClick" onSubmit={handleSubmit}>
        <input
          onChange={handleImage}
          className="input-lg"
          type="text"
          name="image"
          placeholder="image"
        /><br></br><br></br>
        <input
          onChange={handleRegistartion}
          className="input-lg"
          // type="url"
          name="Regisration"
          placeholder="Registration"
        /><br></br><br></br>
        <input
          onChange={handleManufacture}
          className="input-lg"
          type="text"
          name="Year of manufacture"
          placeholder="Year of Manufacture"
        /><br></br><br></br>
        <input
          onChange={handleModel}
          className="input-lg"
          type="text"
          name="model"
          placeholder="model"
        /><br></br><br></br>
        <input
          onChange={handleLastService}
          className="input-lg"
          type="text"
          name="last service"
          placeholder="last service"
        /><br></br><br></br>
        <input
          onChange={handleNextService}
          className="input-lg"
          type="text"
          name="Next service"
          placeholder="Next Service"
        /><br></br><br></br>
        <input type="submit" value="Submit" name="submit" id="submit" />
      </form>
    </div>
  );
  return <div>{AddCar}</div>;
}
export default AddVehicle;
