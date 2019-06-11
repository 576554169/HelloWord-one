function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}
// -------给之前的运动框架加一个参数   这个参数是一个函数   运动结束后执行--------------------------------		
function startMove(obj, attr, iTarget,fnEnd) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		var cur = 0;
		if (attr == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj, attr)) * 100)
		} else {
			cur = parseInt(getStyle(obj, attr))
		}

		var speed = (iTarget - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		if (cur == iTarget) {
			clearInterval(obj.timer);
			
			if (fnEnd) {
				fnEnd()
			}
			//有可能传进来  有可能没有传进来， 做个判断放置出错
			
		} else {
			if (attr == 'opacity') {

				obj.style.filter = 'alpha(opcity:' + (cur + speed) + ')'
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}

		}
	}, 30)
}
