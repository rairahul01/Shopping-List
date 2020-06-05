// var button = document.querySelectorAll("button");
// button [0].addEventListener("click" , function(){
// 	prompt("Are u overconfidence!!");
// 	alert("Jst Get Lost");
// 	console.log("Kuch Nonsense logo se Pala Par Gya!!");
// });

// button [1].addEventListener("dblclick" , function(){
// 	prompt("Are u overconfidence!!");
// 	alert("Jst Get Lost");
// 	console.log("Kuch Nonsense logo se Pala Par Gya!!");
// });

// button [2].addEventListener("mouseenter" , function(){
// 	prompt("Are u overconfidence!!");
// 	alert("Jst Get Lost");
// 	console.log("Kaha Kaha se Nonsense logo se Pala Par Gya!!");
// });
// button [3].addEventListener("mouseout" , function(){
// 	prompt("Are u overconfidence!!");
// 	alert("Jst Get Lost");
// 	console.log("Kaha Kaha se Nonsense logo se Pala Par Gya!!");
// });

const button = document.querySelector("button");
const input = document.querySelector("input");
// function short(){
// 		var li = document.createElement("li");
// 		var ul = document.querySelector("ul");
// 		ul.appendChild(li);
// 		li.appendChild(document.createTextNode(input.value));
//       input.value = "";
// }    
 let short = () => {
       const li = document.createElement("li");
       const ul = document.querySelector("ul");
       ul.appendChild(li);
       li.appendChild(document.createTextNode(input.value));
       input.value = "";
 }      
       button .addEventListener("click",function() {
     	if (input.value.length > 0){
		short()};
});			
  
input.addEventListener("keypress",function(event) {
		if (input.value.length > 0 && event.which == 13) 
		short();      
  }  // input.value = "";    iska comment off karke and upar waala input.value ko hata ke dekho kya hota hae 
);
  var reset = document.querySelector(".reset");
    reset.addEventListener("click", function(){
    var list  = document.querySelector("li")
     list.remove();
  	  });
