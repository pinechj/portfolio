$(function () {
	//이미지리스트의 이미지 눌렀을때
	$("ul.sec8-pic-inner-wrap>li").find("a.sec8imgList").on({
		click: function () {
			openLayerPopup("#sec8-modal", this);
		}
	});

	function openLayerPopup(selectorPopup, returnElement){
		//이미지리스트 셀렉터 설정
		var title = $(".sec8-menu-list.addFix > a").html();
		title = title.toLowerCase();

		var selectorImgList = "ul.sec8-pic-inner-wrap>li";
		if (title != "all")
			selectorImgList = selectorImgList + "." + title;
		var listLength = $(selectorImgList).length; //보여진 사진의 수

		//팝업 열기
		$(selectorPopup).css("display", "block").attr({"tabindex": 0});
		var index = $(selectorImgList).find("a.sec8imgList").index($(returnElement));
		var imgSrc = $(returnElement).siblings("img").attr("src");
		showImg(imgSrc, index);
		
		$("body").css({"height": "100%", "overflow": "hidden"}); //스크롤바 없애기
		$(selectorPopup).trigger("focus").append("<a href='#' class='return'>"); //제일 마지막 부분에 포커스 막는 용도로 a링크 생성

		//팝업창안에서 포커스 돌기
		$(selectorPopup).find("a.return").on("focus", function(){
			$(selectorPopup).trigger("focus");
		});

		//이미지 눌렀을때 다음이미지 보이기
		$(selectorPopup).find(".sec8-modal-slider a").on({
			click: function(){
				$(selectorPopup).find(".modal-right>a").trigger("click");
			}
		})


		//이전 버튼 눌렀을때
		$(selectorPopup).find(".modal-left>a").on({
			click: function () {
				//화면에 나타난 사진의 이전의 인덱스와 이미지주소 설정
				var index = $(selectorPopup).find("ul.sec8-modal-slider>li>img").attr("class");
				if (index <= 0)
					index = listLength - 1;
				else
					index--;

				var imgSrc = $(selectorImgList).eq(index).find("img").attr("src");
				//console.log(index, imgSrc);
				showImg( imgSrc, index);
			}

		});

		//다음 버튼 눌렀을때
		$(selectorPopup).find(".modal-right>a").on({
			click: function () {
				//화면에 나타난 사진의 이전의 인덱스와 이미지주소 설정
				var index = $(selectorPopup).find("ul.sec8-modal-slider>li>img").attr("class");
				if (index >= listLength - 1)
					index = 0;
				else
					index++;

				var imgSrc = $(selectorImgList).eq(index).find("img").attr("src");
				//console.log(index, imgSrc);
				showImg(imgSrc, index);
			}

		});

		//윈도우 사이즈 조절시
		$(window).on("resize", function () {
			var imgSrc = $(".sec8-modal-slider>li>img").attr("src");
			var index = $(".sec8-modal-slider>li>img").attr("class");

			showImg(imgSrc, index);
		});
		
		//닫기 버튼 눌렀을때
		$(".modal-close>a").one({
			click: function () {
				$("body").css({"height": "auto", "overflow": "initial"}); //스크롤바 재생성
				$(returnElement).trigger("focus"); //시작한 a링크로 포커스 이동
				$(selectorPopup).css("display", "none"); //팝업창 닫기				
				$(selectorPopup).find("a.return").remove(); //임시로 넣은 링크 지우기
				//on 이벤트 끄기
				$(selectorPopup).find(".modal-right>a").off("click"); //다음버튼 이벤트 끄기
				$(selectorPopup).find(".modal-left>a").off("click"); //이전버튼 이벤트 끄기
				$(window).off("resize"); //리사이즈 이벤트 끄기
				$(selectorPopup).find("a.return").off("focus"); //포커스 이벤트끄기
				$(selectorPopup).find(".sec8-modal-slider a").off("click"); //이미지 눌렀을때 이벤트 끄기
			}
		});	
	}

	function showImg(imgSrc, index) {		
		console.log(index, imgSrc);
		//이미지 주소변경
		$(".sec8-modal-slider>li>img").attr("src", imgSrc);
		//인덱스를 클래스로 추가
		$(".sec8-modal-slider>li>img").removeClass();
		$(".sec8-modal-slider>li>img").addClass(index + "");


		var winHeight = $(window).height();
		var winWidth = $(window).width();
		var paddingTop = 50; //수정시 css도 수정해야됨

		var ulHeight = winHeight - (paddingTop * 2)

		//로딩되는 이미지 크기 알아내기
		var arr_img = new Array();
		arr_img[0] = new Image();
		arr_img[0].src = imgSrc;
		//이미지 비율 계산
		var imgRate = arr_img[0].width / arr_img[0].height;

		//이미지랩 크기 설정
		$(".sec8-modal-slider").css({
			"height": ulHeight,
			"width": ulHeight * imgRate,
		});

		//윈도의 너비가 이미지의 너비보다 작아질 경우
		if (winWidth <= ulHeight * imgRate) {
			ulHeight = winWidth / imgRate; //ul높이를 이미지 가로크기에 맞게 설정            
			$(".sec8-modal-slider").css({
				"height": ulHeight,
				"width": "100%",
			});
		}

		//이미지랩 가운데 배치
		paddingTop = (winHeight - ulHeight) / 2;
		$(".sec8-modal-wrap").css("padding", paddingTop + "px 0");
	}

});