$(function () {
	$(window).resize(function () {
		//윈도우즈 사이즈 조절시 767이하 해상도에서 좌우 위치 바꾸기
		if ($(window).innerWidth() <= 767) {
			$(".section6-left").insertAfter(".section6-right")
		} else {
			$(".section6-right").insertAfter(".section6-left")
		}
	});
	
	$(".sec6-see-portfolio").on({
		click: function(){
			//해당위치로 스크롤
			$("html, body").stop().animate({
				scrollTop: dic_sectionInfo["work"].topOffset + "px"
			}, 500, function(){
					$(".work a").eq(0).trigger("focus");
			});
		}
	});
});