const request = require('request');
const key = 'AIzaSyDDIeggpk_HAF2DPmUpCRmHeL2d1jBS3rE';

var geocodeAddress = (address)=>{
    return new Promise((resolve,reject)=>{
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`,
            json:true

        },(error,response,body)=>{
            if(error){
                reject("Error in connecting to server")
            }else if(response.body.status==='OK'){
                var obj = {
                    lat:body.results[0].geometry.location.lat,
                    lng:body.results[0].geometry.location.lng
                }
               resolve(obj)
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unnable to find address')
            }else{
                reject("Misc error")
            }
        })


    })

}

geocodeAddress('000000000067').then((message)=>{
    console.log(JSON.stringify(message,undefined,2))

}).catch((error)=>{
    console.log(error)
})