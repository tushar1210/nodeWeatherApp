//const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather.js')
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


var key1 = 'AIzaSyDDIeggpk_HAF2DPmUpCRmHeL2d1jBS3rE'
var key2 = 'b1a8870a1057edcd604ec125da14da6c'

//console.log(address)
var a
geocode.req(encodeURIComponent(argv.a),key1,(error,results)=>{
    if(error){
        console.log(error)
    }else{
        var a = results
        console.log(JSON.stringify(results, undefined, 2));
        weather.fetchTemp(key2,results.lat,results.long,(error,results)=>{
            if(error){
                console.log(error)
            }else{
                console.log(results)
            }
        })
    }

})

//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

