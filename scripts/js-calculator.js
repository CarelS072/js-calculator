
document.addEventListener('DOMContentLoaded', startCalc)
var total = 0;
var val1 = 0;
var val2 = 0;
var operatorValue= 0;
var displayChar = "";




function startCalc(){
  document.getElementById("display").innerHTML="Start your calculations!";
  document.addEventListener("click", pressedButton, display);

  
};

function display (total) {
  document.getElementById("display").innerHTML=total;
};

function clear (){
  display(0);
  val1 = 0;
  val2 = 0;
  total = 0;
  displayChar = "";
}

// function operators (operandi){
//   console.log('hmmm')
//   switch(operandi) {
//     case add:
//       console.log(operandi+" pressed")
//       break;
//     case subtract:
//       console.log(operandi+" pressed")
//       display('-')
//       operatorValue = operandi
//       break;  
//     case multiply:
//       console.log(operandi+" pressed")
//       break;
//     case divide:
//       console.log(operandi+" pressed")
//       break;
        
//     default:
//       display('blank')

//   }   



// }


function modulus (operator) {
  total = val1;

  switch (operator) {
    
      case add:
      display(total) = val1 + val2
        break;
      case subtract:
      display(total)  = val1 - val2
        break;  
      case multiply:
      display(total)  = val1 * val2
        break;
      case divide:
      display(total)  = val1 / val2
        break;
          
      default:
        display('blank')
    
  
  };
 


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
            displayChar = displayChar + "1";
            display(displayChar)

          } else if (this.id == "two"){
            displayChar = displayChar + "2";
            display(displayChar)
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
            val1=parseInt(displayChar) 
            operatorValue = add;
            display('+')
          } else if (this.id == "subtract"){
            val1=parseInt(displayChar) 
            operatorValue = subtract;
            display('-')
          } else if (this.id == "divide"){
            val1=parseInt(displayChar) 
            operatorValue = divide;
            display('/')
          } else if (this.id == "multiply"){
            val1=parseInt(displayChar) 
            operatorValue = multiply;
            display('*')
          } else if (this.id == "decimal"){
            displayChar = displayChar + ".";
            display(displayChar)
            //display('.')
          } else if (this.id == "clear"){
            clear()
          }






      }
  }
};