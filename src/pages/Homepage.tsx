import { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";
import { formatHeader } from "../helpers/formatHeader";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [dataArr, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<any[]>([]);

  const navigate = useNavigate();

  const goToDevicePage = (deviceId: string) => {
    navigate("/device", { state: { deviceId } });
  };

  useEffect(() => {
    axios
      .get(
        "https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/listDevices"
      )
      .then((response) => {
        setData(response.data.results);
        setHeaders(Object.keys(response.data.results[0]));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="homepage ">
      <h1 className="align-self-center">Devices</h1>
      <table className="homepage-table table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th scope="col">{formatHeader(header)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataArr.map((data) => (
            <tr className="table-row" onClick={() => goToDevicePage(data.id)}>
              <td>{data.id}</td>
              <td>{data.name ?? "Unknown"}</td>
              <td>{data.model?.name}</td>
              <td>{data.lastReportTime}</td>
              <td>{data.nextReportTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
