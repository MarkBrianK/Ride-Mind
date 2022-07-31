import React, { useState, useEffect } from "react";
import AddVehicle from "./AddVehicle";
import Vehicles from "./Vehicles";


function Maintainace() {
  const [display, SetDisplay] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [vehicleSearch, setVehicleSearch] = useState([]);


  function handleDisplay() {
    SetDisplay(!display);
  }

  function handleNew(newVehicle) {
    console.log(newVehicle);
    setVehicles([...vehicles, newVehicle]);
  }
  function deleteVehicle(id) {
    const updatedVehicle = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(updatedVehicle);
  }

  function searchHandle(value) {
    const searchedVehicles = vehicleSearch.filter(
      (vec) =>
       vec.vehicleRegistration.toLowerCase().includes(value.toLowerCase()) 
    );
    setVehicles(searchedVehicles);
  }
  useEffect(() => {
    fetch(" https://rideapi.herokuapp.com/Mantainance")
      .then((r) => r.json())
      .then((data) => {
        setVehicles(data);
        setVehicleSearch(data);
      });
  }, []);

  const Search = (
    <div className="container2 ">
      <div >
        <div >
          <form >
            <div>
              <button
                onClick={handleDisplay}
                type="button"
                className="btn btn-primary"
              >
                {display ? "View Vehicles" : "Add Vehicles"}
              </button>
              <div className="container3">
              <input
                onChange={(event) => searchHandle(event.target.value)}
                type="text"
                placeholder="Search vehicle"
              />
              <button type="submit" className="btnsearch ">
                <i className="icon-search"></i>Search
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      
      {Search}
      {display ? (
        <AddVehicle handleNew={handleNew} handleDisplay={handleDisplay} />
      ) : (
        <Vehicles vehicles={vehicles} handleDelete={deleteVehicle} />
      )}
    </div>
  );
}


export default Maintainace