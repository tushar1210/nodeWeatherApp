console.log('starting App')

setTimeout(() => {
    console.log('Inside callback')
}, 200);

setTimeout(()=>{
    console.log('second')
},0)

console.log('finishing')
