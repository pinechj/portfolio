var dic_sectionInfo = {}; //섹션관련 정보저장

$(function () {
	var headerHeight = 75; //헤더 높이
	var scrollHeaderHeight = 60; //스크롤시 헤더 높이

	var isclick = false; //모바일메뉴 X 클릭 여부확인

	//리사이즈시
	$(window).resize(function () {
		//메뉴열려있을때 991이상 해상도시 메뉴닫기
		if ($(window).innerWidth() > 991) {
			isclick = false;
			$(".line").removeClass("addClick");

			//메뉴감추기
			$(".mobile-header-right").css({
				"display": "none"
			});
		}
	});

	//스크롤시
	$(window).scroll(function () {
		//스크롤시 header 메뉴 높이 조절
		if ($(window).scrollTop() > 0) {
			$("#header").addClass("addScroll");
			//모바일메뉴 위치 조정   
			$(".mobile-header-right").css({
				"top": scrollHeaderHeight
			});
		} else {
			$("#header").removeClass("addScroll");
			$(".header-wrap").removeClass("addScroll");
			//모바일메뉴 위치 조정   
			$(".mobile-header-right").css({
				"top": headerHeight
			});
		}
	}); // end scroll 

	//모바일 3선 메뉴 클릭시
	$(".mobile3LineBt").on({
		click: function () {
			if (!isclick) {
				isclick = true;
				//3선메뉴 X버튼 효과
				$(".line").addClass("addClick");

				//메뉴 높이, 보이기 설정
				var headerHeight = $("#header").innerHeight();
				$(".mobile-header-right").css({
					"top": headerHeight,
					"display": "block"
				});
			} else {
				isclick = false;
				$(".line").removeClass("addClick");

				//메뉴감추기
				$(".mobile-header-right").css({
					"display": "none"
				});
			}
		}
	}); //end on
	
	
	/*메뉴버튼 누를시 이동 부분************************/
	//var dic_sectionInfo = {}; //섹션관련 정보저장
	//화면이 모두 구성된뒤 섹션의 정보를 저장한다.
	$(window).load(function () {
		//callSetSectionInfo(dic_sectionInfo); //섹션정보 저장
		setMenuFocus(dic_sectionInfo); //스크롤위치에 포커스 설정
	}); //end window load
	
	//메뉴클릭시
	$(".menuBt").on({
		click: function () {
			$(".menuBt").removeClass("addFocus");
			var menuName = $(this).html().toLowerCase();
			
			//클릭한 위치의 메뉴이름과 같은 메뉴에 포커스설정
			$(".menuBt").each(function(i){
				var thisMenuName = $(".menuBt").eq(i).html().toLowerCase(); //메뉴이름 순차저장
				if(thisMenuName == menuName)
					 $(".menuBt").eq(i).addClass("addFocus");
			});
			
			//해당위치로 스크롤
			$("html, body").stop().animate({
				scrollTop: dic_sectionInfo[menuName].topOffset + "px"
			}, 500, function(){
				//스크롤후 해당위치로 포커스이동				
				if(menuName === "notice")
					$("."+ menuName).find("input").eq(0).trigger("focus");
				else
					$("."+ menuName).find("a").eq(0).trigger("focus");
			});
		}
	});
	
	//윈도우 사이즈 조절시 섹션정보를 다시 저장
	$(window).resize(function(){
		//callSetSectionInfo(dic_sectionInfo);
	});
	
	//스크롤시 위치에 따라 메뉴 포커스 설정
	$(window).scroll(function(){
		setMenuFocus(dic_sectionInfo);
	});
	
	//메뉴에 밑줄 포커스 설정
	function setMenuFocus(arg_dic){		
		$(".menuBt").removeClass("addFocus"); //메뉴포커스 제거
		var scrollTop = $(window).scrollTop(); //현재 커서위치
		for(key in arg_dic)	{
			//console.log("dic_sectionInfo[" + key + "]: " +  dic_sectionInfo[key].topOffset);
			//현재 스크롤이 해당섹션 내에 위치할때 메뉴에 포커스
			if(arg_dic[key].topOffset <= scrollTop
				&& arg_dic[key].bottomOffset > scrollTop){
				$(".menuBt").each(function(i){
					var thisMenuName = $(".menuBt").eq(i).html().toLowerCase(); //메뉴이름 순차저장
					if(thisMenuName == key){						
						$(".menuBt").eq(i).addClass("addFocus");
						//console.log(key, i);
					}						 
				});
			} //end if
		} //end for
	}
	
	/*
	function callSetSectionInfo(arg){ //포트폴리오 갤러리 여러번 콜 하기때문에 섹션정보저장도 그에 따라 설정해 준다.
		setSectionInfo(arg);
		setTimeout(function () {
			setSectionInfo(arg);
		}, 350);
		setTimeout(function () {
			setSectionInfo(arg);
		}, 350);
	}
	*/
	window.setSectionInfo = function(arg_dic_sectionInfo){ //글로벌 함수
		//스크롤시 메뉴에 효과표시를 위해 섹션정보 저장				
		//섹션정보 저장
		$(".mBt").each(function (index) {
			var menuName = $(this).html().toLowerCase(); //메뉴 이름
			if ($("." + menuName).length) { //메뉴이름에 해당되는 섹션이 있을때
				var topOffset = $("." + menuName).offset().top - scrollHeaderHeight; //해당메뉴의 시작 좌표
				topOffset = Math.round(topOffset); //값 반올림
				var bottomOffset = topOffset + $("." + menuName).outerHeight();
				var obj_section = {
					topOffset: topOffset,
					bottomOffset: bottomOffset
				};
				arg_dic_sectionInfo[menuName] = obj_section;
			}
		}); //end each
		//console.log(arg_dic_sectionInfo);
	}

});
