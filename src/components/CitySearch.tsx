import { useState } from "react";

import "../styles/CitySearch.scss";

export default function LocationSearch({ setLoc, setFetchnig }: any) {
  const [loca, setLoca] = useState("");

  const handleChange = (e: any) => setLoca(e.target.value);

  const handleClick = () => {
    if (loca) {
      setLoc(loca);
      setFetchnig(true);
      setLoca("");
    }
  };

  const handleUserCity = () => {
    setFetchnig(false);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Miejscowość..."
        value={loca}
        onChange={handleChange}
      />
      <button onClick={handleClick}>OK</button>
      <button onClick={handleUserCity}>
        <p id="arrow">&#10146;</p>
      </button>
    </div>
  );
}
