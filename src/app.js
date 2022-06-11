// src/app.js
var dataTime ;
function play(){
var data = new Date();
dataTime = data.getFullYear()+"年"+data.getMonth()+"月"+data.getDate()+"日"+data.getHours()+"时"+data.getMinutes()+"分"+data.getSeconds()+"秒";
document.getElementById("time").innerHTML = dataTime;
}
setInterval(play,1000);
