import React, { useState } from "react";

//update the state of an object
//with updater functions

function CarComponent() {
  const [car, setCar] = useState({
    year: 2025,
    make: "Ford",
    model: "Explorer",
  });

  function handleYearChange(event) {
    //c (shorthand from car) is the previous state of the object
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.taregt.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} />{" "}
      <br />
    </div>
  );
}

export default CarComponent;
