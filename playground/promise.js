// var prom = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('Hey it worked')
//     },2800);
    
// });

// prom.then((message)=>{
//     console.log("suucess ",message);
// },(errormssg)=>{
//     console.log(errormssg)
// });

// var asyncAdd = (a,b)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if()
//         },1500)
//     })
// }


// var prom = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolve")
//         reject("reject")
//         resolve("resolve1")
//         reject("reject1")
//     },2030)
// });
// prom.then((message)=>{
//     console.log(message)
// },(errormessage)=>{
//     console.log("this",errormessage)
// })

var asyncAdd=(a,b)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a==='number' && typeof b==='number'){
                resolve(a+b)
            }
            else{
                reject("Wron data type input")
            }
        },1000)
    })
};

asyncAdd(3,2).then((message)=>{
    console.log(message)
    return(asyncAdd(message,6))
}).then((res)=>{
    console.log(res)
}).catch((errorM)=>{
    console.log(errorM)
}); 