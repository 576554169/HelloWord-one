$(function(){
	$('.left>p').click(function(){
		$('.r_bottom').html('')
		var data_name=$(this).attr('data_name');
		console.log(data_name)
		$.get('js/package.json',function(str){
			var arr=eval(str);
			$.each(arr,function(i){
			var name=arr[i].name;
			var img=arr[i].img;
			var list=arr[i].list;
          if(data_name==name){
		  $('#img').attr('src',img)
		  $.each(list,function(i){
			$(`
			<li>
				<p>${list[i].geming}</p>
				<p>${list[i].geshou}</p>
				<p>${list[i].chuchu}</p>
			</li>
			`).appendTo('.r_bottom')
		  })
		  }
		  if(data_name=="shitingliebiao"){
			$('.r_bottom').html('没有数据')
		  }
		  
			})
		})
	})
})