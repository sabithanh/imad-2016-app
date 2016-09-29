console.log('Loaded!');

//change the text of the image
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

//move the image upon click
var element = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft= marginLeft + 5; 
    img.style.MarginLeft = marginLeft + 'px';
}
madi.onclick = function(){
    var interval = setInterval(moveRight,100); 
   };