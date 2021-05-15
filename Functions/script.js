

// Normal function declaration
function getUserRole(name, role) {
    switch(role) {
        case "admin":
            return `${name} is having admin access`
            break
        case "subadmin":
            return `${name} is having sub admin access`
            break
        case "user":
            return `${name} is having user access`
            break
        default:
            return `${name} is a trail user`
            break
    }
}

// function in variable
var printUserRole = function (name, role) {
    switch(role) {
        case "admin":
            return `${name} is having admin access`
            break
        case "subadmin":
            return `${name} is having sub admin access`
            break
        case "user":
            return `${name} is having user access`
            break
        default:
            return `${name} is a trail user`
            break
    }
}




console.log(getUserRole("aravinthan", "admin"));

console.log(printUserRole("praba", "admin", "user"));

