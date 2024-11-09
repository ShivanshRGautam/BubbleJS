var timer =20;
var score = 0;
var hitrn =0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;

}
function makebubble(){
    var clutter="";
for(var i=0; i<=130; i++){
    var rn=Math.floor(Math.random()*10)
   clutter += ` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML= clutter;
}


function runtimer(){
  var timerint =  setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;}
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>GAME OVER</h1><h1>your score : ${score}</h1>`;
        }

    },1000)
}
document.querySelector("#pbtm").addEventListener("click",function(details){
   var clickednum = Number(details.target.textContent);
   if (clickednum === hitrn){
    increaseScore();
    makebubble();
    getNewHit();

   
   }

});


runtimer();
makebubble();
getNewHit();



