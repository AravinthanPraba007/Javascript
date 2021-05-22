// Create an async function
let message;
message = "Start";
console.log("Start");

async function getUser1() {
  return {}
}

console.log(getUser1());
getUser1().then((response) => console.log(response));


// Handling success and errors with async/await
async function getUser() {
  try {
    // Handle success in try
    const response = await fetch('https://api.github.com/users/octocatasasa')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    // Handle error in catch
    console.error(error)
  }
}

// Execute async function
getUser()
