// https://node-webserver-weather-app.herokuapp.com/help

const express = require('express')
const hbs = require('hbs')
const chalk = require('chalk');
const path = require('path');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast');


const app = express();
const port = process.env.PORT || 3000

//express path config
const staticPath = path.join(__dirname ,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//static asset serving
app.use(express.static(staticPath))

//seting up view engine
app.set('views',viewsPath)
app.set('view engine' , 'hbs')
hbs.registerPartials(partialsPath)


app.get('/',(req,res)=>{
    res.render( 'index', {
        name:"pritam",
        title:'Weather',
    })
})

app.get('/about',(req,res)=>{
    res.render( 'about', {
        title:'About Me',
        name:"pritam",
        about:'Software Developer'
    })
})


app.get('/help',(req,res)=>{
    res.render( 'help', {
        title:'Help',
        name:"pritam",
        helpText:'This is some helpful text'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
          error:'error'
        })
    }
    geocode(req.query.address ,(error, {longitude ,latitude, windSpeed} = {})=>{
        if(error){ 
           return res.send({error })
        }
         
         forecast(longitude,latitude,(error, forecastData)=>{
             if(error){  
                return res.send({error })
             }

            res.send({
                forecast:forecastData,
                longitude,
                latitude,
                address:req.query.address,
                windSpeed
            })
         });
     })
})


app.get('/about/*',(req, res)=>{
        res.render('404',{
            name:'Pritam',
            title:'Error 404',
            errorMessage:'No articles found in about section'
        })
    })
    
    app.get('/help/*',(req, res)=>{
        res.render('404',{
            name:'Pritam',
            title:'Error 404',
            errorMessage:'No articles found in help section'
        })
    })

  app.get('*',(req, res)=>{
        res.render('404',{
            name:'Pritam',
            title:'Error 404',
            errorMessage:'Page Not Found'
        })
    })
   



//Port setting -----------------------------------------------

app.listen(port,(error)=>{
   if(error){
       console.log(error)
   }else{
    console.log(chalk.inverse.green( `server is running on port ${port}`))
   }
})