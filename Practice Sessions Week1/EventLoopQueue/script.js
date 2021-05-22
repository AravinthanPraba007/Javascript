function sayTime(message) {
    console.log(new Date() + " - " +message);
}

function triggerTimeout(sayTime, delayTime) {
    sayTime(`Triggered the setTimeout function with ${delayTime}`)
    setTimeout(() => {
        sayTime(`Executed inside function of set Time out with ${delayTime} `)
    },delayTime);
}

function triggerPromise(sayTime, sucessType) {
    return new Promise((resolve, reject) => {
        sayTime(`Triggered the promise function with sucess nature - ${sucessType}`)
        if(sucessType) {
            resolve("Success process");
        }
        else {
            reject("Failed process")
        }
    })
}

function triggerPromiseWithTimeout(sayTime, sucessType, delayTime) {
    return new Promise((resolve, reject) => {
        sayTime(`Triggered the promise function with timeout with sucess nature - ${sucessType}`)
        setTimeout(() => {
        sayTime(`Triggered the promise function inside the timeout`)
        if(sucessType) {
            resolve("Success process");
        }
        else {
            reject("Failed process")
        }
    }, delayTime)
    })
}

triggerTimeout(sayTime, 10);
triggerTimeout(sayTime, 0);

triggerPromise(sayTime, true)
    .then((response) => {
        sayTime(`Promise function got sucess`);
        console.log(response)
    })
    .catch((error) => {
        sayTime(`Promise function got failed`);
        console.log(error)
    })

triggerPromiseWithTimeout(sayTime, false, 10)
    .then((response) => {
        sayTime(`Promise function with Timeout got sucess`);
        console.log(response)
    })
    .catch((error) => {
        sayTime(`Promise function with Timeout got failed`);
        console.log(error)
    })

triggerPromise(sayTime, false)
    .then((response) => {
        sayTime(`Promise function got sucess`);
        console.log(response)
    })
    .catch((error) => {
        sayTime(`Promise function got failed`);
        console.log(error)
    })
