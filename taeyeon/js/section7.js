$(function () {
	$(".sec7-wrap>li").on({
		"mouseenter focusin": function () { //리스트박스에 마우스 엔터시
			//사각형 테두리
			$(this).find(".sec7-borderBox").addClass("addFix");

			//제목설정
			$(this).find(".sec7-list-innerBox-wrap>li:nth-child(1)").addClass("addFix");
			$(this).find(".sec7-list-innerBox-wrap>li:nth-child(1)>h3").addClass("addFix");

			//포트폴리오보기 설정
			$(this).find(".sec7-list-innerBox-wrap>li:nth-child(2)").addClass("addFix");
		},
		"mouseleave focusout": function () { //리스트박스에 마우스 리브시
			//사각형 테두리
			$(this).find(".sec7-borderBox").removeClass("addFix");

			//제목설정
			$(this).find(".sec7-list-innerBox-wrap>li:nth-child(1)").removeClass("addFix");
			$(this).find(".sec7-list-innerBox-wrap>li:nth-child(1)>h3").removeClass("addFix");

			//포트폴리오보기 설정
			$(this).find(".sec7-list-innerBox-wrap>li:nth-child(2)").removeClass("addFix");
		}
	});
	
	$(".sec7-see-portfolio").on({
		click: function(){
			//해당위치로 스크롤
			$("html, body").stop().animate({
				scrollTop: dic_sectionInfo["portfolio"].topOffset + "px"
			}, 500);
		}
	});
	
});