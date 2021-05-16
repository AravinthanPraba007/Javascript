var counter = document.querySelector(".counter")
var follower = document.querySelector(".followers")

let count = 1

setInterval( () => {
    if(count <= 1000) {
        counter.innerText = count
        count++
    }
},1)

setInterval(() => {
    follower.innerText = "Followers in Instagram"
}, 6000);
