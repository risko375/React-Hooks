// import useState and useEffect hooks from react
import { useState, useEffect } from "react";
//import s from "./s.json";

export default () => {
  // set state to null for lat
  // first element is value of state property, 2nd is a function we can use
  // to change the state value
  const [lat, setLat] = useState(null);
  // set state to '' for errorMessage
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect hook to get browser location once when component mounts
  // and setLat with co ordinates or setErrorMessage if cannot retrieve
  // if user blocks access to location

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  // component returns an array containing lat and errorMessage state
  return [lat, errorMessage];
};
