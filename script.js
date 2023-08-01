ampm=document.getElementById('ampm')
function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
        ampm.innerHTML='PM'
        hr=hr-12
    }
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}

setInterval(displayTime,100)