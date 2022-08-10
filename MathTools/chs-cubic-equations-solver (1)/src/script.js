//https://www.wikihow.com/Solve-a-Cubic-Equation#



function findRoots() {
  
  // We can use console.log to print
  // debug statements to help us diagnose
  // issues in our code
  
  // The document object refers to the HTML document
  // getElementById gives us a references to particular elements if the 'id' field matches exactly
  
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  // The 'value' attribute is what it currently written in the input box

        //innerHTML is what is contained between the html tags

  
  if(a==0){
    error.innerHTML = 'This is not a cubic';
    root1.innerHTML = '';
    root2.innerHTML = '';
    root3.innerHTML = '';
  }
  
  
  if(a!=0){
      root1.innerHTML = 'First root: x = ' + 0;


      let disc = Math.pow(b, 2) - 4*a*c; //b^2-4ac

      if(disc < 0){
        root2.innerHTML = 'Second root: Imaginary';
        root3.innerHTML = 'Third root: Imaginary';
      }

      else if(disc == 0){
        root2.innerHTML = 'Second root: x = ' +   (-b/(2*a));
        root3.innerHTML = 'Third root: x = ' + (-b/(2*a)) + ' [Coincident with second root]';
      }

      else if(disc > 0){
        root2.innerHTML = 'Second root: x = ' +   ((-b + Math.sqrt(disc))/(2*a));
        root3.innerHTML = 'Third root: x = ' + ((-b - Math.sqrt(disc))/(2*a));
      }  
  }
}