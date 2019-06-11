 // 存入cookie
 function setCookie(name,value,iDay){
    var oDate=new Date()
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate
}
setCookie('age','18',14)
setCookie('user','lvv',14)
// alert(document.cookie)


// 获取cookie
function getCookie(name){
    var arr=document.cookie.split('; ')
    // console.log(arr)
    for(var i=0;i<arr.length;i++){
        arr2=arr[i].split('=')
        console.log(arr2)
    if(name==arr2[0]){
       return arr2[1]
    }
    }
    
    return ''
}
// alert(getCookie('user'))

//cookie的删除
function removeCookie(name){
    setCookie(name,1,-1)
}
removeCookie('age')