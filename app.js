// EventLister -> tag-d event baigaa uiguig sonsoh/shalgah
// ES6 -> variable/tag/document.addEventListner (click, keyboard, scroll) (()=>{})
// setTimeout --> negl daraa
// setInterval --> hyzgaargui
// queryselector--> class duudhad asgiglana
// ternary operator /?:/
//define ----->
const start = document.querySelector(".start");
const stop= document.querySelector(".stop");
const reset = document.querySelector(".reset");
const lap = document.querySelector(".lap");
const time = document.getElementsByTagName('h1')[0];
const ol = document.getElementsByTagName('ol')[0];
let doil=0,second=0,minute=0,hour=0;

function watch(){
    doil++;
    time.innerText = "0"+hour+":"+"0"+minute+":"+"0"+second+":"+"0"+doil;
    if(doil==100){
    second++;
    doil=0;
    if(second==60){
      second=0  
      minute;
      minute++;
      if(minute==60){
        minute=0  
      hour;
      hour++;
      }
    }
}
let d = doil<10 ? "0"+doil: doil;
let s = second<10 ? "0"+second : second;
let m = minute<10 ? "0"+minute : minute
let h = hour<10 ? "0"+hour: hour;
time.innerText = h+":"+m+":"+s+":"+d;
}
let up;
start.addEventListener('click',()=>{
     up=setInterval(watch,0.01);
});
stop.addEventListener('click',()=>{
   clearInterval(up);
});
reset.addEventListener('click',()=>{
    clearInterval(up);
    hour=0;
    minut=0;
    second=0;
    doil=0
    time.innerText="00:00:00:00";
    });
lap.addEventListener('click',()=>{
// document.CreatElement("tagName") --> shineer tag uusgeh 
let liel = document.createElement('li');
// .append() --> tag dotor uur tag oruulah 
liel.innerText = time.innerText =  "0"+hour+":"+"0"+minute+":"+"0"+second+":"+"0"+doil;
let d = doil<10 ? "0"+doil: doil;
let s = second<10 ? "0"+second : second;
    let m = minute<10 ? "0"+minute : minute;
    let h = hour<10 ? "0"+hour : hour;
    liel.innerText = h+":"+m+":"+s+":"+d;
ol.append(liel)
})
