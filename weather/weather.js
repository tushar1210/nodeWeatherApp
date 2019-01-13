const request = require('request')
var fetchTemp=(key,lat,long)=>{
    return new Promise((resolve,reject)=>{
    request({
        url:`https://api.darksky.net/forecast/${key}/${lat},${long}?units=si`,
        
        json:true,
    },(error,response,body)=>{
        // if(error){
        //     callback("ERROR IN TEMP")
        // }else if(response.statusCode===403 || response.body.status === "Forbidden"){
        //     callback("WRONG Key")
        // }else if(response.statusCode===200)
        // {   
        //     callback(undefined,{
        //         temperature:body.currently.temperature,
        //         apparentTemp:body.currently.apparentTemperature,
                
        //     })
        //     //console.log(`https://api.darksky.net/forecast/${key}/${lat},${long}?units=si`)
        // }
        // else if(response.statusCode===400){
        //     callback("Bad request")
        // }
        // else if(response.statusCode===404){
        //     callback("Not Found")
        // }else{
        //     callback("Misc Error")
        // }
        
            if(error){
                reject("Error in Temp")
            }else if(response.statusCode===403 || response.body.status === "Forbidden"){
                reject("WRONG Key")
            }else if(response.statusCode===404){
                reject('Not Found')
            }else if(response.statusCode===400){
                reject('Bad Request')
            }else if(response.statusCode===200){
                var obj={
                     temperature : body.currently.temperature,
                     apparentTemp : body.currently.apparentTemperature
                }
                resolve(obj)                        
            }
            else{
                reject('Misc Error')
            }
        })
    })
}

module.exports={
    fetchTemp,
}