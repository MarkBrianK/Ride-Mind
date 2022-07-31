import React from "react";
import Card from "./MantainCard"

function Vehicles({ vehicles, handleVehicle}) {
  const  cars = vehicles.map((vehicle) => {
    return (
      <Card
        handleVehicle={handleVehicle}
        key={vehicle.id}
        id={vehicle.id}
        vehicleRegistration={vehicle.vehicleRegistration}
        image={vehicle.image}
        yearOfManufacture={vehicle.yearOfManufacture}
        model={vehicle.model}
        lastService={vehicle.lastService}
        nextService={vehicle.nextService}
      />
    );
  });

  return (
    <div >
      <div >
        <div className="portalheader">
          <h1 >Vehicles Servicing Portal</h1>
        </div>
        <div >{cars}</div>
      </div>
    </div>
  );
}


export default Vehicles