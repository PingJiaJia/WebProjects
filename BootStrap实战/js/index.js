
$(function(){
	$(window).on("resize",function(){
		//1.1获取窗口宽度
		let clientW=$(window).width();
		console.log(clientW);
		//1.2 设置临界值
		let isShowBigImg=clientW>=800;
		
		//1.3获取所有的item
		let $allItem=$("#lk_carousel .item");
		
		//1.4遍历
		$allItem.each(function(index,item){
			//1.4.1 取出图片的路径
			let src=isShowBigImg?$(item).data("lg-img"):$(item).data("sm-img");
			let imgUrl='url("'+src+'")';
			
			//设置背景
			$(item).css({
				backgroundImage:imgUrl
			})
		})
		
	})
	$(window).trigger("resize"); 
	
})