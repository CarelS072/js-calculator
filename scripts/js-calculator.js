
document.addEventListener('DOMContentLoaded', startCalc)


// function displayResult() {
//   document.getElementById("one").innerHTML = "2";
// }

function startCalc(keypadPress){
var total = 0;
document.getElementById("display").innerHTML = total;
var keypadPress = [[one,1],[two,2],[three,3],[four,4],[five,5],[six,6],[seven,7],[eight,8],[nine,9],[zero,0]]

var buttons = document.getElementsByTagName("button");
console.log(buttons)
var buttonsCount = buttons.length;
console.log(buttonsCount)
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick
      console.log(this.id)
      
    
  }
}


// document.addEventListener("click", displayResult);
// document.getElementById("one").innerHTML = "1";

// var btnPress = document.getElementById("one").onclick = logtest('btnPress');

// }

// function buttonPress(){
//   // var keypadPress = [[one,1],[two,2],[three,3],[four,4],[five,5],[six,6],[seven,7],[eight,8],[nine,9],[zero,0]]
   
//   for (x=0;x<keypadPress.length;x++){
//      if (document.getElementById([x][0])) {
//        return
//   };
// };

// function logtest(nicmin) {
//   console.log(nicmin);
// }
