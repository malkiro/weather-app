const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");




// Get the location -> find the geocode for the location -> use the geocode to find the weather

geocode("Colombo", (error, geoResponse) => {

    // if(error){
    //     console.log(error);
    // }else{
    //     forecast(response.latitude, response.longitude, (error, response) => {
    //         if(error){
    //             console.log(error);
    //         }else{
    //             console.log(response);
    //         }
    //     });
    // }

    if(error){
        return console.log(error);
    }

    forecast(geoResponse.latitude, geoResponse.longitude, (error, response) => {
        if(error){
            return console.log(error);
        }

        console.log(geoResponse.location + ". " + response);
    });
});

