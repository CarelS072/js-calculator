
document.addEventListener('DOMContentLoaded', startCalc)

function startCalc(){
  var total = 0;
  document.getElementById("display").innerHTML="0";

  document.addEventListener("click", pressedButton);

  
};

function display (total) {
  document.getElementById("display").innerHTML=total;
};


function pressedButton(){

  console.log(buttons)
//  var buttonsCount = buttons.length;
// console.log(buttonsCount)

var buttons = document.getElementsByTagName("button");

  
  for (var i = 0; i <= buttons.length; i += 1) {
      buttons[i].onclick = function(e) {
          
          console.log(this.id);
          if (this.id == "one"){
            display(1)
          } else if (this.id == "two"){
            display(2)
          } else if (this.id == "three"){
            display(3)
          } else if (this.id == "four"){
            display(4)
          } else if (this.id == "five"){
            display(5)
          } else if (this.id == "six"){
            display(6)
          } else if (this.id == "seven"){
            display(7)
          } else if (this.id == "eight"){
            display(8)
          } else if (this.id == "nine"){
            display(9)
          } else if (this.id == "zero"){
            display(0)
          } else if (this.id == "add"){
            display('+')
          } else if (this.id == "subtract"){
            display('-')
          } else if (this.id == "divide"){
            display('/')
          } else if (this.id == "multiply"){
            display('*')
          } else if (this.id == "decimal"){
            display('.')
          }
          





      }
  }
};