function btn(){
    fetch("https://reqres.in/api/users",
{
    method: 'POST',
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        Status:['on picking','in transit','delivered'] 
    })
})

.then(res => res.json())
.then(data =>
    document.getElementById('root').innerHTML =
    JSON.stringify(data['Status'][Math.floor(Math.random()*data['Status'].length)])
    )(data).catch(error => {
        console.log(error)
    })
}
 