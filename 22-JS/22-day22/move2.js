function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj, false)[attr]
    }
}
/*
    json[attr]        {    
                 attr:value
                'width':200,
                'height':200
            }
*/
function startMove(obj, json, fnEnd) {
    clearInterval(obj.time)

    obj.time = setInterval(function () {
        var bStop = true   //假设所有的值都到了
        for (var attr in json) {
            // 判断是透明度还是其他属性
            if (attr == "opacity") {
                var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                var cur = parseInt(getStyle(obj, attr));
            }
            // 设置速度
            var speed = (json[attr] - cur) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            // 判断运动
            if (cur != json[attr]) {
                bStop = false
                if (attr == "opacity") {
                    cur += speed;
                    obj.style.opacity = cur / 100;
                    obj.style.filter = "alpha(opacity:" + cur + ")";
                } else {
                    cur += speed;
                    obj.style[attr] = cur + "px"
                }
            }
           
        }
        if (bStop) {
            console.log(1)
            clearInterval(obj.time)
            if (fnEnd) {
                fnEnd()
            }
        }
    }, 30)
}