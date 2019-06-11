function LimitDrag(id){
// 继承属性
Drag.call(this,id)
}
// 继承方法
for(i in Drag.prototype){
    LimitDrag.prototype[i]=Drag.prototype[i]
}


// 重写
LimitDrag.prototype.fnMove=function(ev){
    var oEvent=ev||event
    var l=oEvent.clientX-this.disX;
    var T=oEvent.clientY-this.disY;
    if(l<=0){
        l=0
    }else if(l>document.documentElement.clientWidth-this.oBox.offsetWidth){
        l=document.documentElement.clientWidth-this.oBox.offsetWidth
    }
    this.oBox.style.left=l+'px'
    this.oBox.style.top=T+'px'
}