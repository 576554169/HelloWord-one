window.onload=function(){
    var lv = document.getElementById("lv")
    var str = document.getElementsByClassName("startion");
    var end = document.getElementById("end-start");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var timer = null;
    var key = 0;
    function autoPlay(){
        key++;
        if(key>str.length-3){
            lv.style.left = 0;
            key = 1;
        }
        startMove(lv,{left:-key*str[0].offsetWidth});
    }
    var timer = setInterval(autoPlay,3000)
    left.onclick = function(){
        key--;
        if(key<0){
            lv.style.left = -3*str[0].offsetWidth + 'px'
            key=3;
        }
        startMove(lv,{left:-key*str[0].offsetWidth});
    }
    right.onclick = function(){
        autoPlay()
    }
    end.onmouseover = function(){
        clearInterval(timer)
    }
    end.onmouseout = function(){
        timer = setInterval(autoPlay,3000)
    }

}