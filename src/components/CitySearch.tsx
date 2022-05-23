import { useState } from "react";

import "../styles/CitySearch.scss";

type Props = {
  setLoc: Function;
  setFetching: Function;
};

export default function LocationSearch({ setLoc, setFetching }: Props) {
  const [loca, setLoca] = useState("");

  const handleChange = (e: any) => setLoca(e.target.value);

  const handleClick = () => {
    if (loca) {
      setLoc(loca);
      setFetching(true);
      setLoca("");
    }
  };

  const handleUserCity = () => {
    setFetching(false);
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
