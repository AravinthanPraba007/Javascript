// Initialize a promise
const promise1 = new Promise((resolve, reject) => {})

const promise2 = new Promise((resolve, reject) => {
  resolve('We did it!')
})
promise2.then((response) => {
  console.log(response)
})


const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
})

// Log the result and Chain a promise 
// by returning the result so that next then we can use the result data

promise
.then((response) => {
  console.log(response);
  response = response + "Extra added";
  return response;
})
.then((responseReUse) => {
  console.log("Response Used again " + responseReUse)
})
console.log("End");