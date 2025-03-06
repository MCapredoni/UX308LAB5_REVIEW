// This program *converts* **air** to **quality**

function convertAirQualityIndex(air){
    if(air <= 50){
	return "Good";
    }
    if(air <= 100){
    return "Moderate";
    }
    if(air <= 150){
    return "Unhealthy for Sensitive Groups";
    }
    if(air <= 200){
    return "Unhealthy";
    }
    if(air <= 300){
    return "Very Unhealthy";
    }
    if(air >= 301){
    return "Hazardous";
     }
}  

export {convertAirQualityIndex}