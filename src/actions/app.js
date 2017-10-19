import axios from 'axios'

const API_KEY = '36ac6d2168aa0189c9850f7db33cf12c'
const ROOT_URL  = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`  ;


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  //typof promise
  const request = axios.get(url)

  return{
    type: FETCH_WEATHER,
    payload : request
  }
}
