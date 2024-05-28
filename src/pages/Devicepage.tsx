import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Devicepage.css";
import { formatDate } from "../helpers/formatDate";

function DevicePage() {
  // Would regularly use state management tool but handling state directly to get location for navigating back to previous page
  const { state } = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        `https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/device/${state.deviceId}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="device-page">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <h1>Device Information for {state.deviceId}</h1>
      <div className="data-labels">
        <div>
          <span>Device ID</span>
          <p>{data.id}</p>
        </div>
        <div>
          <span>Name</span>
          <p> {data.name ?? "Unknown"}</p>
        </div>
        <div>
          <span>Model Name</span>
          <p>{data.model?.name ?? "Unknown"}</p>
        </div>
        <div>
          <span>Model Family</span>
          <p> {data.model?.family ?? "Unknown"}</p>
        </div>
        <div>
          <span>Model product</span>
          <p>{data.model?.product ?? "Unknown"}</p>
        </div>
        <div>
          <span>Owner Id</span>
          <p>{data.owner?.id ?? "Unknown"}</p>
        </div>
        <div>
          <span>Owner name</span>
          <p>{data.owner?.name ?? "Unknown"}</p>
        </div>
        <div>
          <span>Next Report Time</span>
          <p>{formatDate(data.nextReportTime)}</p>
        </div>
        <div>
          <span>Last Report Time</span>
          <p>{formatDate(data.nextReportTime)}</p>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
