import "../styles/Weather.scss";
import arrow from "../graph/arrow.png";

type Props = {
  loc: string;
  data: {
    name: string;
    weather: {
      icon: string;
    }[];
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
      pressure: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
  };
};

export default function Weather({ loc, data }: Props) {
  return (
    <div className="info">
      <div className="flex">
        <h1 className="City">{loc ? loc : data.name}</h1>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
        />
      </div>
      <div className="flex">
        <p>{new Date(data.dt * 1000).toUTCString()}</p>
      </div>
      <div className="flex">
        <p>Temperatura: {data.main.temp.toFixed(0)} &deg;C </p>
        <p>Odczuwalna: {data.main.feels_like.toFixed(0)} &deg;C</p>
      </div>
      <div className="flex">
        <p>Temp. Max {data.main.temp_max} &deg;C</p>
        <p>Temp. Min {data.main.temp_min} &deg;C</p>
      </div>
      <div className="flex">
        <p>
          Wschód:{" "}
          {new Date(data.sys.sunrise * 1000)
            .toLocaleTimeString("pl")
            .slice(0, 5)}
        </p>
        <p>
          Zachód:{" "}
          {new Date(data.sys.sunset * 1000)
            .toLocaleTimeString("pl")
            .slice(0, 5)}
        </p>
      </div>
      <div className="flex">
        <p>Wiatr: {(data.wind.speed * 3.6).toFixed(0)} km/h</p>
        <div className="ring">
          <p className="N">N</p>
          <p className="E">E</p>
          <p className="S">S</p>
          <p className="W">W</p>
          <img
            src={arrow}
            alt="arrow"
            className="arrows"
            style={{ transform: `rotate(${data.wind.deg}deg)` }}
          />
        </div>
      </div>
      <div className="flex">
        <p>Wilgotność: {data.main.humidity} %</p>
        <p>Ciśnienie: {data.main.pressure} hPa</p>
      </div>
      <div className="flex"></div>
    </div>
  );
}
