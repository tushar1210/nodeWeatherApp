const request = require('request')
var fetchTemp=(key,lat,long,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/${key}/${lat},${long}?units=si`,
        
        json:true,
    },(error,response,body)=>{
        if(error){
            callback("ERROR IN TEMP")
        }else if(response.statusCode===403 || response.body.status === "Forbidden"){
            callback("WRONG Key")
            console.log('wrong Key')
        }else if(response.statusCode===200)
        {   console.log(response.statusCode)
            callback(undefined,response.body.currently.temperature)
        }
        else if(response.statusCose===404){
            callback("NotFound")
        }
    })
}

module.exports={
    fetchTemp,
}