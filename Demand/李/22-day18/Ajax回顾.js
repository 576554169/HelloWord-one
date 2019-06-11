function ajax(url,fnSucc,fnFaild){
// 1创建XMLHttpRequest对象
if(window.XMLHttpRequest){
    var oAjax = new XMLHttpRequest();
}else{
    var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
}
// 2连接服务器
oAjax.open('get',url,true);
// 3发送
oAjax.send();


// 4接受返回
oAjax.onreadystatechange = function(){
    if(oAjax.readyState == 4){
        if(oAjax.status == 200){
            fnSucc(oAjax.responseText);
        }else{
            if(fnFaild){
                fnFaild();
            }
        }
    }
}
}