import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  useEffect(() => {
    axios
      .get(
        "https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices"
      )
      .then((response) => {
        console.log(response, "test response");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="homepage">
      <h1>Devices</h1>
    </div>
  );
}
