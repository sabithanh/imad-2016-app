console.log('Loaded!');

//change the text of the image
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

//move the image upon click
var madi = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft= marginLeft + 5; 
    madi.style.marginLeft = marginLeft + 'px';
}
madi.onclick = function(){
    var interval = setInterval(moveRight,50); 
   };