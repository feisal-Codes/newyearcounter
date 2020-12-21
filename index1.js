let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");
let p3=document.querySelector(".p3");
let p4=document.querySelector(".p4");






function counter(){
let newyear="1 Jan 2021";
let newyeardate=new Date(newyear);
let cur_date= new Date();
let totalseconds=(newyeardate-cur_date)/1000;
const days=Math.floor(totalseconds/3600/24);
const hours=Math.floor(totalseconds/3600)%24;
const minutes=Math.floor(totalseconds/60)%60;
const seconds=Math.floor(totalseconds)%60;
p1.innerHTML=days;
p2.innerHTML=hours;
p3.innerHTML=minutes;
p4.innerHTML=seconds;

}

counter();
setInterval(counter,1000);