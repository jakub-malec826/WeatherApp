const API_KEY = "ad0d8a2877418d10e97dd1cb0c35d1d1";

export async function FetchLatAndLon(
  loc: string,
  setLat: any,
  setLon: any,
  setData: any,
  setError: any
) {
  if (loc) {
    await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      })
      .catch((error) => {
        console.log(error);
        setData();
        setError(`Ups! Błąd w miejscowości.`)
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
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => setLoc(data[0].local_names.pl))
      .catch((error) => {
        console.log(error);
        setData();
        setError(`Ups! Coś poszło nie tak. Error: ${error}`)
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
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setData();
        setError(`Ups! Coś poszło nie tak. Error ${error}`)
      });
  }
}
