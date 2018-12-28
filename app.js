//const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const argv = yargs
    .options({
        a: {
            demand:true,
            alias:'address',
            describe:'weather for address',
            string:true,
        }
    })
    .help()
    .alias('help','h')
    .argv;


var key = 'AIzaSyDDIeggpk_HAF2DPmUpCRmHeL2d1jBS3rE'
//console.log(address)
geocode.req(encodeURIComponent(argv.a),key,(error,results)=>{
    if(error){
        console.log(error)
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }

})

//b1a8870a1057edcd604ec125da14da6c
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

