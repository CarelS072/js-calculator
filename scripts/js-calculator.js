
document.addEventListener('DOMContentLoaded', startCalc)
var total = 0;
var val1 = 0;
var val2 = 0;
var operatorValue= "";
var displayChar = "";




function startCalc(){
  document.getElementById("display").innerHTML="Start your calculations!";
  document.addEventListener("click", pressedButton, display);

  
};

function display (displayChar) {
  document.getElementById("display").innerHTML=displayChar;
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

  switch (operator) {
    
      case add:
      display(val1 + val2)
      console.log(operatorValue +" performed")
      val1=parseInt(displayChar)
      displayChar=""
      val2=x;
        break;
      case subtract:
      display(val1 - val2)
      console.log(operatorValue +" performed")
      val1=parseInt(displayChar)
      displayChar=""

      val2=x;
        break;  
      case multiply:
      display(val1 * val2)
      console.log(operatorValue +" performed")
      val1=parseInt(displayChar)
      displayChar=""

      val2=x;
        break;
      case divide:
      display(val1 / val2) 
      console.log(operatorValue +" performed")
      val1=parseInt(displayChar)
      displayChar=""

      val2=x;
        break;
          
      default:
      console.log("modulus broke")
    
  
  }
 


};

function pressedButton(){

var buttons = document.getElementsByTagName("button");
//console.log(buttons)

  for (var i = 0; i <= buttons.length; i += 1) {
      buttons[i].onclick = function() {
          console.log(this.id);
          if (this.id == "one"){  
            displayChar = displayChar + "1";
            display(displayChar)

          } else if (this.id == "two"){
            displayChar = displayChar + "2";
            display(displayChar)
          } else if (this.id == "three"){
            displayChar = displayChar + "3";
            display(displayChar)
          } else if (this.id == "four"){
            displayChar = displayChar + "4";
            display(displayChar)
          } else if (this.id == "five"){
            displayChar = displayChar + "5";
            display(displayChar)
          } else if (this.id == "six"){
            displayChar = displayChar + "6";
            display(displayChar)
          } else if (this.id == "seven"){
            displayChar = displayChar + "7";
            display(displayChar)
          } else if (this.id == "eight"){
            displayChar = displayChar + "8";
            display(displayChar)
          } else if (this.id == "nine"){
            displayChar = displayChar + "9";
            display(displayChar)
          } else if (this.id == "zero"){
            displayChar = displayChar + "0";
            display(displayChar)
          } else if (this.id == "add"){
            if (val2===x){
              val2=parseInt(displayChar) 
              displayChar="";
              operatorValue = add;
            } else{
              val1=parseInt(displayChar) 
              displayChar="";
              operatorValue = add;
            }
        
          } else if (this.id == "subtract"){
            val1=parseInt(displayChar) 
            displayChar="";
            operatorValue = subtract;
          } else if (this.id == "divide"){
            val1=parseInt(displayChar) 
            displayChar="";
            operatorValue = divide;
          } else if (this.id == "multiply"){
            val1=parseInt(displayChar)
            displayChar="";
            operatorValue = multiply;
          } else if (this.id == "decimal"){
            if (displayChar.lastIndexOf(".")==-1){
              displayChar = displayChar + ".";
                console.log(displayChar.lastIndexOf("."))
              display(displayChar)
            } else {
                console.log(displayChar.lastIndexOf("."))
              display(displayChar)
            }
          } else if (this.id == "clear"){
            clear()
          } else if (this.id == "equals"){
             val2 =parseInt(displayChar)
             modulus(operatorValue)
            // display(displayChar)
          } 
 






     }
  }
};