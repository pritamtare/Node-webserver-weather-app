
// const chalk = require("chalk");
// const geocode = require('./geocode')
// const forecast = require('./forecast')



// geocode('bengaluru',(error, {longitude ,latitude, windSpeed})=>{
//    if(error){ 
//        console.log(error)
//    }
    
//     forecast(longitude,latitude,(error, forecastData)=>{
//         if(error){ 
//             console.log(error)
//         }
       
//         console.log(forecastData)
//         console.log(chalk.inverse.green(' Longitude:',longitude ,'Latitude:',latitude , 'WindSpeed:', windSpeed," "))
//     });
// })



// const chalk = require("chalk");
// const request= require('postman-request')


// const geocode = (address, callback)=>{
//     const url = 'http://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=64acb5b05ff69b0374a66efc0e81bbd3';

//     request({url:url , json:true },(error, response)=>{
//        if(error){
//         callback('Unable to connect weather server..')
//        }
//        else if(response.body.message){
//         callback('ERROR:' + response.body.message+' Try another search')
//        }
//        else{
//         callback(undefined ,{
//             longitude : response.body.coord.lon,
//             latitude : response.body.coord.lat,
//             windSpeed: response.body.wind.speed
//         })
//     }
//     })
// }
// geocode('le89h',(error, data)=>{
//     console.log(error)
//     console.log(data)
// })

// module.exports= geocode;


