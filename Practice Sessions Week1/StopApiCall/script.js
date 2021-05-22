
var fakeAPI = function(apiDelay, maxDelay, Id){
    return new Promise(function(resolve, reject){
     console.log(`ApiID:${Id} triggered with execution time ${apiDelay} and Allowed Waiting time ${maxDelay}`)
     setTimeout(function(){
        var data = {
          'id': '1',
          'userName': 'Aravinthan',
          'phone': '328932979'
        }
        resolve(data);
      
     }, apiDelay)
      
     setTimeout(() => {
        // reject("Api taking too long time than "+maxDelay)
     },maxDelay)
    })
  };


function triggerTimeout(delay, id) {
    console.log(`TimeoutID:${id} trigged with delay ${delay}`)
    setTimeout(() => {
        console.log(`Called Inside TimeoutID:${id} with delay ${delay}`)
    }, delay)
}  
 
var count = 5;
var instance = 1;
// while(instance <= count){
//     fakeAPI(instance*2000, 5000, instance)
//     .then((response) => {
//         console.log("Response recived");
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log("Error occured");
//         console.log(error);
//     })
//     triggerTimeout(instance*2000, instance)
//     instance++;

// }
fakeAPI(100000000, 6000, instance)
    .then((response) => {
        console.log("Response recived");
        console.log(response);
    })
    .catch((error) => {
        console.log("Error occured");
        console.log(error);
    })

triggerTimeout(5000, instance)



