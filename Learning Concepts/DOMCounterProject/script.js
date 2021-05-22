var counter = document.querySelector(".counter")
var counter2 = document.getElementsByClassName("counter2")
var follower = document.querySelector(".followers")

let count = 1

setInterval( () => {
    if(count <= 1000) {
        counter.innerText = count
        count++
    }
},1)

let count2 = 1

setInterval( () => {
    if(count2 <= 700) {
        counter2[0].innerText = count2
        count2++
    }
},5)

setInterval(() => {
    follower.innerText = "Followers in Instagram"
}, 6000);
