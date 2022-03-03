function clock(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var ampm = document.getElementById('ampm');

    if(hours>=12){
        ampm.innerHTML='PM';

    }else{
        ampm.innerHTML='AM';

    }
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('mins').innerHTML=minutes;
    document.getElementById('sec').innerHTML=seconds;
}
setInterval(clock,1000);

function setTime(){
    let at1 = document.getElementById('at1')
    let at2 = document.getElementById('at2')
    let at3 = document.getElementById('at3')
    let at4 = document.getElementById('at4')

    at1.innerText=wakeup.options[wakeup.selectedIndex].text;
    at2.innerText=lunch.options[lunch.selectedIndex].text;
    at3.innerText=nap.options[nap.selectedIndex].text;
    at4.innerText=night.options[night.selectedIndex].text;


    var i = document.getElementById('wakeup').value;
    console.log(i);
    var j = document.getElementById('lunch').value;
    console.log(j);
    var k = document.getElementById('nap').value;
    console.log(k);
    var l = document.getElementById('night').value;
    console.log(l);
    var uniquetime = new Date().getHours();

    if(i==uniquetime){
        document.getElementById('ImagesAsPerTiming').style.backgroundImage = "url(./images/morning.png)";
        document.getElementById('gm-msg').innerText = "GOOD MORNING! WAKE UP";
        document.getElementById('right-comment').innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    }
    if(j==uniquetime){
        document.getElementById('ImagesAsPerTiming').style.backgroundImage= "url(./images/lunch.png)";
        document.getElementById('gm-msg').innerText= "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById('right-comment').innerText= "LET'S HAVE SOME LUNCH !!";
    }
    if(k==uniquetime){
        document.getElementById('ImagesAsPerTiming').style.backgroundImage="url(./images/evening_image.png)";
        document.getElementById('gm-msg').innerText= "GOOD EVENING !!";
        document.getElementById('right-comment').innerText= "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }
    if(l==uniquetime){
        document.getElementById('ImagesAsPerTiming').style.backgroundImage="url(./images/night_image.png)";
        document.getElementById('gm-msg').innerText= "GOOD NIGHT !!";
        document.getElementById('right-comment').innerText=  "CLOSE YOUR EYES AND GO TO SLEEP";
    }
}