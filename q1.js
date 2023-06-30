//Initialize the callback as argument
function delayedCallback(callback) {
    setTimeout(callback, 2000);
  }
  
  // This is the callback function
  function myCallback() {
    console.log("Delayed callback invoked!");
  }
  
  delayedCallback(myCallback);
  