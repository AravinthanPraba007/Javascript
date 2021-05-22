// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    console.log("User name is "+data.name)
  })
  .catch((error) => {
    console.error(error)
  })

// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocatasas')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    console.log("User name is "+data.name)
  })
  .catch((error) => {
    console.error(error)
  })