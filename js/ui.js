import { convertCountryCode, convertTimeStamp } from "./utils.js"

export function updateUI(data,selectors){
    selectors.city.innerHTML =`${data.name},
    ${convertCountryCode(data.sys.country)}`

    selectors.datetime.innerHTML = convertTimeStamp(data.dt, data.timezone)
    selectors.weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`
    selectors.weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176C`;
    // selectors.weatherIcon
    
}

