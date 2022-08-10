document.getElementsByTagName("h1")[0].style.fontSize = "3vw";
function findSolution(){
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;
  let d = +document.getElementById("d").value;
  let e = +document.getElementById("e").value;
  let f = +document.getElementById("f").value;
  var xSubVar = +0;
  var xSubCon = +0;
  var yAnsVar = +0;
  var xAnsVar = +0;
  
  if((a==0 && b==0)||(d==0&&e==0)||(a==0&&d==0)||(b==0&&e==0)){
    error.innerHTML = 'This is not a linear system of equations';
  }
  else if(b/a==e/d){
    error.innerHTML = '';
    if(c*d/a==f){
      xAnswer.innerHTML = 'x = infinite possible values';
      yAnswer.innerHTML = 'y = infinite possible values';
    }
    else{
      xAnswer.innerHTML = 'x = no possible values';
      yAnswer.innerHTML = 'y = no possible values';
    }
  }
  
  else if(a==0){
    error.innerHTML = '';
    yAnsVar = -c/b;
    xAnsVar = (-f-e*yAnsVar)/d
    yAnswer.innerHTML = 'y = ' + yAnsVar;
    xAnswer.innerHTML = 'x = ' + xAnsVar;
  }
  else if (d==0){
    error.innerHTML = '';
    yAnsVar = -f/e;
    xAnsVar = (-c-b*yAnsVar)/a
    yAnswer.innerHTML = 'y = ' + yAnsVar;
    xAnswer.innerHTML = 'x = ' + xAnsVar;
  }
  else{
    error.innerHTML = '';
    xSubVar = -b/a;
    xSubCon = -c/a;
    
    yAnsVar = -(xSubCon+f)/(d*xSubVar+e);
    xAnsVar = xSubVar*yAnsVar+xSubCon;
    yAnswer.innerHTML = 'y = ' + yAnsVar;
    xAnswer.innerHTML = 'x = ' + xAnsVar;
  }
}