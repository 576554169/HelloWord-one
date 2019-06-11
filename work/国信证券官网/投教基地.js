window.onload = function(){
    var oneTab=document.getElementById("oneTab");
	var lis=oneTab.getElementsByTagName("li");
	var divs=document.getElementsByClassName("tabDiv");
	var twoTab=document.getElementById("twoTab");
	var twoLis=twoTab.getElementsByTagName("li");
	var twoDiv=document.getElementsByClassName("twoDiv");
	var threeTab=document.getElementById("threeTab");
	var threeLi=threeTab.getElementsByTagName("li");
	var threeDiv=document.getElementsByClassName("threeDiv");
    for(var x=0;x<lis.length;x++){
		lis[x].index=x;
		lis[x].onmouseover=function(){
			for(var y=0;y<lis.length;y++){
				// 循环第一个选项卡的li
				lis[y].className="";
			}
			this.className="oneLi";
			// 点谁，谁变黄
			for(var s=0;s<divs.length;s++){
				// 循环第一个选项卡对应的div
				divs[s].className="tabDiv";
			}
			// 点谁，谁显示
			divs[this.index].className="tabDiv divActive";
		}
    }
    for(var a=0;a<twoLis.length;a++){
		twoLis[a].index=a;
		twoLis[a].onmouseover=function(){
			for(var s=0;s<twoLis.length;s++){
				twoLis[s].className="";
			}
			this.className="oneLi";
			for(var b=0;b<twoDiv.length;b++){
				twoDiv[b].className="twoDiv";
			}
			twoDiv[this.index].className="twoDiv divActive";
		}
    }
    for(var a=0;a<threeLi.length;a++){
		threeLi[a].index=a;
		threeLi[a].onclick=function(){
			for(var s=0;s<threeLi.length;s++){
				threeLi[s].className="";
			}
			this.className="oneLi";
			for(var b=0;b<threeDiv.length;b++){
				threeDiv[b].className="threeDiv";
			}
			threeDiv[this.index].className="threeDiv divActive";
		}
	}
}