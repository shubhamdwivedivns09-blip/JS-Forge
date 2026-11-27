const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    // DB calls, Cryptography
    setTimeout(function(){
        console.log("Aysnc Task is Complete ");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed"); // this run after being resolve executed
    
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Shubham" , email: "SHubham@mail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})
//========================================================
const Promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
         let error=false
         if(!error){
            resolve({username: "Shubham", password:"123"})
         }else{
            reject("ERROR: SOmething went wrong")
         }
    },1000)
})

const username = Promisefour
  .then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("The promise is either resolve or Rejected")
)

//============================/OR/========================


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
    if(!error){
        resolve({username: "JAVA SCRIPT", password:"123"})
    }else{
        reject("ERROR: JS went wrong")
    }

    },1000)
})

async function consumepromisefive(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumepromisefive()

// async function getAlluser(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ", error);
        
//     }
    
// }

// getAlluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error)
})