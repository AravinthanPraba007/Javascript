console.log(this)

var user = {
    name: "Praba",
    courseCount : 5,
    getCourseCount : function () {
        console.log("Line number 7 ", this)
        console.log(" object key function can acess object name key value" + this.name)
        function sayHello() {
            console.log("Hello")
            console.log("Line no 11 ", this)
            console.log("Normal function inside an object can't access the object Name key value " + this.name)
        }
        sayHello()
    }
    
}

user.getCourseCount()

var id = 23
console.log("my id id "+ id)
console.log("User object added behind + symbol in conole.log " + user)
console.log("user object added behind , symbol in conole.log ", user )