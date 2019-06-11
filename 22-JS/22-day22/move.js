function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj, false)[attr]

    }
}
function startMove(obj, attr, iTarget,fnEnd) {
    clearInterval(obj.time)
    obj.time = setInterval(function () {
        // 判断是透明度还是其他属性
        if (attr == "opacity") {
            var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            var cur = parseInt(getStyle(obj, attr));
        }
        // 设置速度
        var speed = (iTarget - cur) / 5;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        // 判断运动
        if (iTarget == cur) {
            clearInterval(obj.time)
            if(fnEnd){
                fnEnd()
            }

        } else {
            if (attr == "opacity") {
                cur += speed;
                obj.style.opacity = cur / 100;
                obj.style.filter = "alpha(opacity:" + cur + ")";
            } else {
                cur += speed;
                obj.style[attr] = cur + "px"
            }
        }
    }, 30)
}