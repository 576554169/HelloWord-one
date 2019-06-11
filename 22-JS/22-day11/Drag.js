function Drag(id) {
    var _this = this
    this.oBox = document.getElementById(id);
    this.disX = null;
    this.disY = null;
    this.oBox.onmousedown = function (ev) {
        _this.fnDown(ev)
    }
}
Drag.prototype.fnDown = function (ev) {
    var oEvent = ev || event
    var _this = this
    this.disX = oEvent.clientX - this.oBox.offsetLeft;
    this.disY = oEvent.clientY - this.oBox.offsetTop;
    document.onmousemove = function (ev) {
        _this.fnMove(ev)
    }
    document.onmouseup = function () {
        _this.fnUp()
    }
}
Drag.prototype.fnMove = function (ev) {
    var oEvent = ev || event
    this.oBox.style.left = oEvent.clientX - this.disX + 'px';
    this.oBox.style.top = oEvent.clientY - this.disY + 'px'
}
Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
    this.oBox.onmousedown=null;
}