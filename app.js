//const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')
const argv = yargs
    .options({
        a: {
            demand:true,
            alias:'address',
            describe:'weather for address',
            string:true,
        },
        
    })
    .help()
    .alias('help','h')
    .argv;


var key1 = 'AIzaSyAo4-HkaETgohfjNYUJWpU7C4W-vQCl-Ic'
var key2 = 'b1a8870a1057edcd604ec125da14da6c'

//console.log(address)
// geocode.req(encodeURIComponent(argv.a),key1,(error,results)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(JSON.stringify(results, undefined, 2));
//         weather.fetchTemp(key2,results.lat,results.long,(error,results)=>{
//             if(error){
//                 console.log(error)
//             }else{
//                 console.log(JSON.stringify(results,undefined,2))
//             }
//         })
//     }

// })
var lat,lng
geocode.geocodeAddress(encodeURIComponent(argv.a),key1).then((message)=>{
    console.log(message)
    lat=message.lat
    lng=message.lng
    return weather.fetchTemp(key2,lat,lng)
    
}).then((mssg)=>{
    console.log(mssg)
}).catch((errorMessage)=>{
    console.log(errorMessage)
})

// weather.fetchTemp(key2,lat,lng).then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })

//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

