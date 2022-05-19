export async function FetchLatAndLon(
  loc: string,
  setLat: any,
  setLon: any,
  setData: any,
  setError: any
) {
  if (loc) {
    await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      })
      .catch((error) => {
        console.log(error);
        setData();
        setError(`Ups! Błąd w miejscowości.`);
      });
  }
}

export function FetchLocalization(
  lat: number,
  lon: number,
  setLoc: any,
  setData: any,
  setError: any
) {
  if (lat && lon) {
    fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => setLoc(data[0].local_names.pl))
      .catch((error) => {
        console.log(error);
        setError(`Ups! Coś poszło nie tak. Error: ${error}`);
      });
  }
}

export async function GetData(
  lat: number,
  lon: number,
  setData: any,
  setError: any
) {
  if (lat && lon) {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setData();
        setError(`Ups! Coś poszło nie tak. Error ${error}`);
      });
  }
}
