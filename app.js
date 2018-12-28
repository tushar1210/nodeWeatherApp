const request = require('request');
const yargs = require('yargs');
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

var address=encodeURIComponent(argv.a)
//console.log(address)
var lat,long;
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
    json:true,
},(error,response,body)=>{
    if(error){
        console.log('Unable to connect to server')
    }else if(response.body.status==='OK'){
        lat = (JSON.stringify(body.results[0].geometry.location.lat));
        long = JSON.stringify(body.results[0].geometry.location.lng);
        console.log(lat,long);
        console.log(response.body.status)
    }else{
        console.log(response.statusCode,'Unnable to find address')
    }
    // console.log(response.statusCode,error)
    

})

