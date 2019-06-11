window.onload = function () {
    var pop = document.getElementsByClassName('pop-layer')[0];
    var pops = document.getElementById('pop');
    var menu = document.getElementsByClassName('pop-layer')[0];
    pops.onmouseover = function () {
        pop.style.width = '1200px';
        pop.style.height = '292px';
    }
    menu.onmouseover = function () {
        pop.style.width = '1200px';
        pop.style.height = '292px';
    }
    menu.onmouseout = function () {
        pop.style.display = '0';
        pop.style.width = '0';
        pop.style.height = '0';
        pops.onmouseout = function () {
            pop.style.height = '0';
            pop.style.width = '0';
        }
    }
    // menu.onmouseover = function(){
    //     menu.style.height = '1200px';
    //     menu.style.height = '292px';
    // }
    // menu.onmouseout =function(){
    //     pop.style.height = '0';
    //     pop.style.width = '0';
    // }
    var gsy = document.getElementsByClassName('boss')[0];
    var gli = gsy.getElementsByTagName('li');
    for (var i = 0; i < gli.length; i++) {
        gli[i].index = i;
        gli[i].onmouseover = function () {

            for (var j = 0; j < gli.length; j++) {
                gli[j].style.zIndex = "20";
                gli[j].style.opacity = "0.8"
                gli[j].style.transform = ""

            }
            this.style.zIndex = "9999"
            this.style.opacity = "1"
            this.style.transform = "scale(1.1,1.1)"

        }
    }
    var scv = document.getElementsByClassName('xxbb')[0];
    var jli = scv.getElementsByTagName('li');
    console.log(jli)
    for (var a = 0; a < jli.length; a++) {
        jli[a].index = a;
        jli[a].onmouseover = function () {

            for (var b = 0; b < jli.length; b++) {
                jli[b].style.zIndex = "20";
                jli[b].style.opacity = "0.8"
                jli[b].style.transform = ""
                jli[b].style.background = '';

            }
            this.style.zIndex = "9999"
            this.style.opacity = "1"
            this.style.transform = "scale(1.1,1.1)"
            this.style.background = '#4dc0ff';

        }
    }

    //轮播
    var banner = document.getElementById('banner');
    var pic = document.getElementById('pic');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var num = 0;
    right.onclick = function () {
        fn();
    }
    left.onclick = function () {
        num--;
        //12345 5
        if (num < 0) {
            pic.style.left = -6076 + 'px';
            num = 3;
            startMove(pic, { left: -num * 1519 })
        } else {

            startMove(pic, { left: -num * 1519 })
        }
    }
    function fn() {
        num++;
        //12345 5
        if (num >= 5) {
            pic.style.left = 0 + 'px';
            num = 1;
            startMove(pic, { left: -num * 1519 })
        } else {

            startMove(pic, { left: -num * 1519 })
        }
    }
    var timer = setInterval(fn, 1500);
    banner.onmousemove = function () {
        clearInterval(timer);
    }
    banner.onmouseout = function () {
        timer = setInterval(fn, 2000);
    }
}