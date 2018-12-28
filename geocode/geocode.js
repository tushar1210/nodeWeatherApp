const request = require('request');
var req = (address,key,callback)=>{
    var lat,long;
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
        json:true,
    },(error,response,body)=>{
        if(error){
            console.log('Unable to connect to server')
            callback(error)
        }else if(response.body.status==='OK'){
            lat = (JSON.stringify(body.results[0].geometry.location.lat));
            long = JSON.stringify(body.results[0].geometry.location.lng);
            callback(undefined,{
                address,
                lat,
                long
            })
            console.log(response.body.status)
            // callback(resp)
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Unnable to find address')
        }
        else{
            callback('Misc problem')
        }
        // console.log(response.statusCode,error)
        
    
    })
    var values={
        lat:lat,
        long:long
    }
    return values;
}

module.exports={
    req,
    
}