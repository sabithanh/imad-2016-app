//Counter code
var button=document.getElementById('counter');
counter=0;
button.onclick = function (){
  //make a request to teh counter endpoint
  
  //capture the response and store it in a variable
  
  //render the variabel in the correct span
  counter =counter+1;
  var span = document.getElementById('count');
  span.innerHTML=counter.toString();
};