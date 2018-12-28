    // var getUser = (id,callback)=>{
    //     var user={
    //         id:id,
    //         name:'Tushar'

    //     }
    //     callback(user)
    // } 

    // getUser(12,(userObject)=>{
    //     console.log(userObject)
    // })

    var getUser=(id,callbck)=>{
        var person = {
            name:'Tushar',
            id:id
        }
        callbck(person)
    }

    getUser(12,(obj)=>{
        console.log(obj)
    })