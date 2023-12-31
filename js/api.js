const API_KEY = "c016bfde1699b6533f2a798b3133ab41"


// fonksiyon sehir ve birim bilgilerini parametre olarak alır
async function fetchWeatherData(city,units){
    try{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
       )
      
       if(!response.ok){
        throw new Error("istek başarılı değil")
       }

       return response.json()


    }catch(error){
        console.error(error)
    }
}

export default fetchWeatherData;