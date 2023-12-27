var h2 = document.querySelector(".h2");

function time(){
    var date= new Date();
    var hours= date.getHours();
    var Minute = date.getMinutes();
    var second=date.getSeconds();

    watch=hours+" : "+Minute+" : "+second;
            h2.innerHTML=watch;
    setInterval(time,); 
   }

time();

alert("just Enjoy this page");