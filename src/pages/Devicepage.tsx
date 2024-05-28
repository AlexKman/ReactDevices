import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function DevicePage() {
  // Would regularly use state management tool but handling state directly to get location for navigating back to previous page
  const { state } = useLocation();

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        `https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/${state.deviceId}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className="device-page">Test device Page</div>;
}

export default DevicePage;
