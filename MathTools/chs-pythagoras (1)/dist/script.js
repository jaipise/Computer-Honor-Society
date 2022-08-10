function findHypotenuse() {
  
  // We can use console.log to print
  // debug statements to help us diagnose
  // issues in our code
  console.log('button clicked');
  
  // The document object refers toe the HTML document
  // getElementById gives us a references to particular
  // elements if the 'id' field matches exactly
  
  let a = document.getElementById("leg1").value;
  let b = document.getElementById("leg2").value;
  let hypot = document.getElementById("hypot");
  
  // The 'value' attribute is what it currently
  // written in the input box
  
  //The Math library has functions we can
  // use to perform calculations such as sqrt
  let c = Math.sqrt(a*a + b*b);
  
  //innerHTML is what is contained between the html tags
  hypot.innerHTML = 'c = ' + c;
}