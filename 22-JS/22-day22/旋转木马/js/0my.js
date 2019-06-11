window.onload = function () {
    var wrap = document.getElementById('wrap');
    var slide = document.getElementById('slide');
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById('arrow');
    var arrLeft = document.getElementById('arrLeft');
    var arrRight = document.getElementById('arrRight');
    var config = [
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 20,
            zIndex: 2
        },//0
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 80,
            zIndex: 3,
        },//1
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 100,
            zIndex: 4,
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 80,
            zIndex: 3,
        },//3
        {
            width: 400,
            top: 20,
            left: 750,
            opacity:20,
            zIndex: 2,
        }//4
    ]
    
    slide.onmouseover=function(){
        startMove(arrow,{'opacity':100})
    }
    slide.onmouseout=function(){
        startMove(arrow,{'opacity':0})
    }

    function hanshu(){
        for(var i=0;i<lis.length;i++){
            startMove(lis[i],config[i])
        }
    }
    hanshu()

    arrLeft.onclick=function(){
        config.unshift(config.pop())
        hanshu()
    }

    arrRight.onclick=function(){
       config.push(config.shift())
        hanshu()
    }
}