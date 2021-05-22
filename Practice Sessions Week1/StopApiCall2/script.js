
var triggerAPI = function (maxDelay) {
  return new Promise(function (resolve, reject) {
    console.log("Api triggered")
    fetch('https://api.github.com/users/octocat')
      .then((response) => {
        console.log("Fetch got sucess")
        resolve(response.json())
      })
      .catch((error) => {
        console.log("Fetch got issue")
        console.error(error)
        reject(error)
      })

    setTimeout(() => {
      reject("Api taking too long time than " + maxDelay)
    }, maxDelay)
  })
};

function triggerTimeout(delay) {
  console.log("Time out trigged with delay "+delay)
  setTimeout(() => {
      console.log("Called Inside Timeout with delay "+delay)
  }, delay)
}  

triggerAPI(5)
  .then((response) => {
    console.log("Response recived");
    console.log(response);
  })
  .catch((error) => {
    console.log("Error occured");
    console.log(error);
  })

  triggerTimeout(5000)



