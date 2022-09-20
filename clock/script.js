function showtime()
{
var date= new Date();
var hr= date.getHours();
var min= date.getMinutes();
var sec= date.getSeconds();

  var session="AM"
if(hr>12)
 {
    hr=hr-12;
    session="PM";
 } 
 if(hr==12)
 {
    hr=12;
 }



hr=(hr<10)? "0"+ hr:hr;
min=(min<10)? "0"+min:min;
sec=(sec<10)? "0"+sec:sec;

var time=hr+":"+min+":"+sec+" "+session;
document.getElementById("clockDisplay").innerText= time;
document.getElementById("clockDisplay").innerContent= time;

setTimeout(showtime, 1000);
}
showtime();