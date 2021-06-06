const chalk = require('chalk');
const request = require('postman-request');



const forecast = (longitude,latitude,callback)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${longitude}&lon=${latitude}&appid=64acb5b05ff69b0374a66efc0e81bbd3`;

    request({ url, json: true }, (error, response) => {
        
        if(error){
               callback("Unable to connect to weeather server",undefined)
        }
        else if(response.body.error ){
              callback('ERROR:' + response.body.cod == 0 +' Try another search')
           }
        else {
               callback(undefined,chalk.inverse.green(" Temperature is " +response.body.main.temp + " Kelvin and today seems "+ response.body.weather[0].description+ " "))
        }
    
    })

}

// forecast(15.4550,34.0155,(error, data)=>{
//     console.log(error)
//     console.log(data)
// });

module.exports= forecast;