var user = {
    firstName : "Aravinthan",
    lastName : "Praba",
    role : "Admin",
    isActive : true
}

console.log(user.firstName)

user.role = "USER"
console.log(user.role);

user.emailId ="aravinthan@gmail.com"

console.table(user)

// Going to try array , function inside an object
// Inside object this keyword refer to the key inside the object

var testUser = {
    userName : "Praba",
    premiumUser : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount : function () {
        return `${this.userName} is enrolled in ${this.courseList.length} courses`
    },
    getUserInfo : function () {
        var userInfo = {
            name : this.userName,
            courseList : this.courseList,
            courseCount : this.courseList.length
        }
        return userInfo
    }
}

console.log(testUser.getCourseCount())
testUser.buyCourse("React js")
testUser.buyCourse("Vue js")
testUser.buyCourse("Angular js")
console.log(testUser.getCourseCount())

console.log(testUser.getUserInfo())

var courseList = true;
console.log("this courrse list var is prsent outside : " + courseList)


//Object Constructor
console.log("---------- Object Constructor --------------")

var Customer = function (firstName, courseCount) {
    this.firstName = firstName,
    this.courseCount = courseCount,
    this.getCourseCount = function () {
        console.log(`Enrolled course count is : ${this.courseCount}`)
    }
}

var praba = new Customer("Praba", "4")
console.log(praba)
praba.getCourseCount()

Customer.prototype.getFirstName = function () {
    console.log(`You first name is ${this.firstName}`)
}

praba.getFirstName()