import { useEffect, useState } from "react";

import "./styles/App.scss";

import ErrorPage from "./components/ErrorPage";
import Weather from "./components/Weather";
import LocationSearch from "./components/CitySearch";
import { FetchLatAndLon, FetchLocalization, GetData } from "./API/GetAPI";

function App() {
  const [loc, setLoc] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [fetching, setFetchnig] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState("Ups! wpisz coś")

  useEffect(() => {
    if (fetching && loc) {
      FetchLatAndLon(loc, setLat, setLon, setData, setError);
    } else if (!fetching) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
      FetchLocalization(lat, lon, setLoc, setData, setError);
    }
    GetData(lat, lon, setData, setError);
  }, [fetching, loc, lat, lon]);

  return (
    <div className="App">
      <LocationSearch
        setLoc={setLoc}
        setFetchnig={setFetchnig}
        setData={setData}
      />
      {data ? <Weather loc={loc} data={data} />: <ErrorPage error={error}/>}
    </div>
  );
}

export default App;
