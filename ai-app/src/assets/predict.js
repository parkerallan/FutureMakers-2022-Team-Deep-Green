function predict(){
  setTimeout(() => {
    console.log("Delayed for 2 seconds.");
    document.getElementById("img").style.display = "block";
  }, 2000)
  
  let spinner = document.getElementById("spinner");
  spinner.style.visibility = 'visible'; //'hidden'

  setTimeout(() => {
    console.log("Delayed for 2 seconds.");
    let spinner = document.getElementById("spinner");
    spinner.style.visibility = 'hidden'; //'hidden'
  }, 2000)
}