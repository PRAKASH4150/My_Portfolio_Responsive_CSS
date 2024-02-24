function myFunction() {
    console.log("Entered");
    var x = document.getElementById("navigation");
    if (x.className === "mainnav") {
        console.log("Entered2");  
      x.className += " responsive";
    } else {
        console.log("Entered3");
      x.className = "mainnav";
    }
  }