import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  // lat and errorMessage gives access to state received from useLocation call
  const [lat, errorMessage] = useLocation();

  let content;
  // if there is an errorMessage i.e not null, set content to a div displaying error
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
    // otherwise if lat is obtained from the browser and not null
    // then call SeasonDisplay component passing lat as prop
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
    // if still waiting for a response call Spinner displaying "Please accept location request"
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  // render content in div
  return <div>{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
