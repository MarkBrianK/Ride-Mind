import React from "react"

function MantainCard({
  vehicleRegistration,
  image,
  lastService,
  nextService,
  model,
  yearOfManufacture,
  handleDelete,
  id,
}) {
  function handleDeleteClick() {
    fetch(`https://rideapi.herokuapp.com/Mantainance/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(id));
  }

  return (  
    <div className="display">
     <div >
      <div >

        <div>
        <hr /> 
          <img src={image} width="500" alt="Vehicle" />
          <h2>Model: {model}</h2>
          <h2>Vehicle Registration Number: {vehicleRegistration}</h2>
          <h2 > Year of Manufacture: {yearOfManufacture}</h2>
          <h2>Last service Date: {lastService}</h2><br></br>
          <h2 >Next service Date: {nextService}</h2>
          <button onClick={handleDeleteClick}className = "btn">
              Delete vehicle
          </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MantainCard
