$(function () {
	$(".sec8-work").on({
		click: function(){
			//해당위치로 스크롤
			$("html, body").stop().animate({
				scrollTop: dic_sectionInfo["work"].topOffset + "px"
			}, 500, function(){
				$(".work input").eq(0).trigger("focus");
			});
		}
	});

});