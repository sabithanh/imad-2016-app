//Counter code
var button=document.getElementById('counter');

button.onclick = function (){
  //make a request to teh counter endpoint
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onReadystateChange= function (){
      if (request.readyState === XMLHttpRequest.DONE){
          //take some action
          if(request.status==200){
              var counter=request.responseText;
              var span = document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
      //not done yet
  };
  //make the request
  request.open('GET', 'http://sabithanh.imad.hasura-app.io/counter', true);
  request.send(null);
};

//Submit name
var nameInput=document.getelementByid('name');
var name=nameInput.value;
var submit = document.GetelementById('submit_btn');
submit.onclick = funtcion () {
  //make a request to the server and send the name
  //capture the list of names and render it as a list
  var names =['name1', 'name2', 'name3','name4'];
  var list ='';
  for (var i=0; i<names.length; i++){
      list=list+ <li> + names[i] + </li>;
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};
