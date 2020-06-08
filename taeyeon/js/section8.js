$(function () {
	var title = "all"; //사진리스트 초기 선택자
	//var listNum = setList(); //사진리스트 가로에 몇개 나타날지 저장   
	$(window).load(function(){
		callSortImgList();
	});	

	//창크기 변경할때
	$(window).resize(function () {
		callSortImgList(); //이미지 리스트 정렬 함수
	});

	//이미지 리스트 정렬 함수
	function callSortImgList() {
		sortImgList(title);
		setTimeout(function () {
			sortImgList(title); //해상도 변경으로 사진위치가 변경될때, 사진위치 바뀌는 애니메이션 후 자리를 제대로 못잡는 현상을 수정하기 위해 x초후에 한번 더 호출해서 자리를 잡아줌
		}, 300);
		setTimeout(function () {
			sortImgList(title); //해상도 변경으로 사진위치가 변경될때, 사진위치 바뀌는 애니메이션 후 자리를 제대로 못잡는 현상을 수정하기 위해 x초후에 한번 더 호출해서 자리를 잡아줌
		}, 300);
	}
  
	//메뉴 클릭이벤트
	$(".sec8-menu-list>a").on({
		click: function () {
			title = $(this).html();
			title = title.toLowerCase();
			callSortImgList();

			//클릭된 메뉴색변경
			$(".sec8-menu-list>a").removeClass("addFix");
			$(".sec8-menu-list").removeClass("addFix");
			$(this).addClass("addFix");
			$(this).parent().addClass("addFix");
		}
	});


	//이미지 리스트 이벤트
	$(".sec8imgList").on({
		"mouseenter focusin": function () {
			$(this).parent().find(".sec8-text-wrap").css({
				"opacity": 1,
				"bottom": "40px",
			});

			$(this).parent().find(".sec8-pic-green").css("opacity", .9);
			$(this).parent().find("img").css("transform", "scale(1.2)");
		},
		"mouseleave focusout": function () {
			$(this).parent().find(".sec8-text-wrap").css({
				"opacity": 0,
				"bottom": 0,
			});

			$(this).parent().find(".sec8-pic-green").css("opacity", 0);
			$(this).parent().find("img").css("transform", "scale(1.0)");
		}

	});


	//이미지 리스트 위치설정
	function sortImgList(classname) {
		var selector = ".sec8-pic-inner-wrap>li";
		var width = $(window).width();

		if ($(selector).length <= 0) { //이미지가 없으면 종료
			alert("image list empty");
			return;
		}

		$(selector).css({
			"opacity": 0,
			"transform": "scale(0)"
		}); //모든 이미지 가리기

		if (classname != "all")
			selector = selector + "." + classname;
    
		var listWidth = 100; //이미지리스트 가로 길이
		var listMarginRight = 0; //margin-right
		var listMarginBottom = 20; //margin-bottom
		var picNumPerLine = 0; //한줄당 몇개 이미지를 나타낼지 설정

		//가로배열되는 사진수에 따라 이미지 넓이 등 설정
		if (width <= 768) {
			listWidth = 100;
			listMarginRight = 0;
			listMarginBottom = 20;
			picNumPerLine = 1;
		} else if (width <= 992) {
			listWidth = 48;
			listMarginRight = 4;
			listMarginBottom = 32;
			picNumPerLine = 2;
		} else if (width <= 1200) {
			listWidth = 31;
			listMarginRight = 3.5;
			listMarginBottom = 35;
			picNumPerLine = 3;
		} else { //1200이상
			listWidth = 31;
			listMarginRight = 3.5;
			listMarginBottom = 40;
			picNumPerLine = 3;
		}

		//열별로 높이 저장할 변수설정
		var arrCol = new Array(picNumPerLine);
		for (i = 0; i < arrCol.length; i++)
			arrCol[i] = 0;

		//모든 이미지 리스트 좌표를 저장할 변수설정
		var arrLeft = [];
		var arrTop = [];
		//var picListCoord = {top : 0, left : 0}; //사진리스트의 좌표 저장 오브젝트

		//이미지리스트 가로 설정
		$(selector).css("width", listWidth + "%");

		$(selector).each(function (index) {
			//var row = parseInt(index / picNumPerLine); //행
			//var col = parseInt(index % picNumPerLine); //열

			//저장되어있는 높이값중 가장 낮은값의 인덱스 저장            
			var obj = {
				value: 0,
				index: 0
			};
			getMinValue(obj, arrCol); //가장 낮은값과 값의 열index 가져오기       

			//모든이미지의 위치저장 배열에 데이터 저장
			arrTop[index] = obj.value; //top값 설정
			arrLeft[index] = ((listWidth + listMarginRight) * obj.index); //left값 설정           

			//열별로 높이값 누적
			arrCol[obj.index] += parseInt($(selector).eq(index).height()); //이미지 높이값 추가
			arrCol[obj.index] += listMarginBottom; //margin-bottom 값 추가         

		}); //end each

		//이미지 배치
		for (i = 0; i < arrTop.length; i++) {
			$(selector).eq(i).css({
				"opacity": 1,
				"transform": "scale(1)",
				"left": arrLeft[i] + "%",
				"top": arrTop[i] + "px",
			});
		}

		//섹션8 높이 설정 (메뉴높이 + 사진리스트 높이) - wrap높이 설정하여 section8 높이를 자동으로 설정        
		var obj = {
			value: 0,
			index: 0
		};
		getMaxValue(obj, arrCol);
		$(".sec8-pic-inner-wrap").css({
			"height": obj.value
		});
		
		//섹션 정보저장, header.js의 함수호출
		setSectionInfo(this.dic_sectionInfo);
		
	} //end sortImgList    


	//높이값이 저장되있는 배열의 최소값과 최소값의 인덱스 구하기
	function getMinValue(arg_obj, arg_arrCol) {
		arg_obj.value = arg_arrCol[0];
		for (i = 0; i < arg_arrCol.length; i++) {
			if (arg_obj.value > arg_arrCol[i]) {
				arg_obj.value = arg_arrCol[i];
				arg_obj.index = i;
			}
		}
	}

	//높이값이 저장되있는 배열의 최대값과 최대값의 인덱스 구하기
	function getMaxValue(arg_obj, arg_arrCol) {
		arg_obj.value = arg_arrCol[0];
		for (i = 0; i < arg_arrCol.length; i++) {
			if (arg_obj.value < arg_arrCol[i]) {
				arg_obj.value = arg_arrCol[i];
				arg_obj.index = i;
			}
		}
	}
});