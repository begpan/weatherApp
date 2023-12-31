// zamaan dilimini kullanarak biçimlendirimiş bir saat ve tarih bilgisi döndüren fonksiyon
 function convertTimeStamp(timeStamp, timezone){
    // zaman dilimini saat cinsinden dönüştürür(saniyeden saaate)
    const convertTimeZone = timezone / 3600
    // yeni bir tarih nesnesini olustur
    const date = new Date(timeStamp * 1000)

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour:"numeric",
        minute: "numeric",
        timezone:`UTC/GMT${convertTimeZone  >= 0 ? "-" : "+" }${Math.abs(convertTimeZone)}`,
        hour12:true //12 saat formatında gosterilsin
    }
    // tarihi ve saati kullanıcıya döndürür
    return date.toLocaleString("en-US" ,options);
}


// Int.DisplayNames: js de uluslararası dil ve bolge adlarına cevirmek için kullanılan bir apidir
// ınt: internationalization

// ülke kodunu ülke adına ceviren fonksiyon
  function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], { type:"region" })
    console.log(regionNames.of(country))
    return regionNames.of(country)
}



export {convertTimeStamp,convertCountryCode }