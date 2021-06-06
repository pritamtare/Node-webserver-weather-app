const chalk = require("chalk");
const request= require('postman-request')


const geocode = (address, callback)=>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=64acb5b05ff69b0374a66efc0e81bbd3';

    request({url:url , json:true },(error, response)=>{
        if(error){
            callback('Unable to connect weather server..',undefined)
           }
           else if( response.body.cod == 404){
            callback('ERROR:City Not Found Try Another Search',undefined)
           }
       else{
            callback(undefined ,{
                longitude : response.body.coord.lon,
                latitude : response.body.coord.lat,
                windSpeed: response.body.wind.speed
            })
        }

    })
}


// geocode('pune',(error, data)=>{
//     console.log(error)
//     console.log(data)
// })

module.exports= geocode;


