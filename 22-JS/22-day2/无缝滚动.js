function scrolling(oUl,aLis,oLeft,oRight){
				var timer=null;
				var speed=-5;
					oUl.innerHTML+=oUl.innerHTML;
					oUl.style.width=aLis[0].offsetWidth*aLis.length+"px";
					
					function auto(){
						timer=setInterval(function(){
							oUl.style.left=oUl.offsetWidth+speed+"px";
							if(oUl.offsetLeft<-oUl.offsetWidth/2){
								oUl.style.left=0;
							}else if(oUl.offsetLeft>0){
								oUl.style.left=-oUl.offsetWidth/2+"px";
							};
						},30);
					};
					auto();
					oLeft.onmouseover=function(){
						speed=-5;
					};
					oRight.onmouseover=function(){
						speed=5;
					};
					oUl.onmouseover=function(){
						clearInterval(timer);
					};
					oUl.onmouseout=function(){
						auto();
					};
}
