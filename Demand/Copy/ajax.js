function ajax(url,fnSucc,fnFaild)
{
    //创建ajax
    if(window.XMLHttpRequest)
    {
        var oAjax = new XMLHttpRequest();
    }
    else
    {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //连接服务器
    oAjax.open('GET',url,true);
    //发送
    oAjax.send();
    //接受返回
    oAjax.onreadystatechange = function()
    {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)
            {
                fnSucc(oAjax.responseText)
            }
            else
            {
                if(fnFaild)
                {
                    fnFaild();
                }
            }
        }
    }

}