$(function(){  
  setImageSlide("div.slide", 1);

  function setImageSlide(selector, first){
    var numSlide = $(selector).find("section").length;
    var slideNow = 0;
    var slidePrev = 0;
    var slideNext = 0;
    var slideFirst = first;
    var isWheelBlocked = false;
    var timerId = 0;

    //섹션 배치
    $(selector).find("section").each(function(i){
      $(this).css("left", i * 100 + "%");
    });

    showSlide(slideFirst);

    //네비게이션 클릭
    $("nav.gnb").find("li a").on({
      "click": function(){
        var index = $("nav.gnb").find("li").index($(this).parent());
        showSlide(index + 1);
      }
    });

    $(window).on("mousewheel DOMMouseScroll", function(e){
      clearTimeout(timerId);
      timerId = setTimeout(function(){isWheelBlocked = false;}, 300);

      if(isWheelBlocked === true) 
        return false;
      isWheelBlocked = true;

      if(e.originalEvent.wheelDelta === undefined){ //파이어폭스
        direction = e.originalEvent.detail / 3;
      }else{ //크롬 등 표준브라우저
        direction = e.originalEvent.wheelDelta / -120;
      }
      
      if (direction > 0){ //다음페이지
        showSlide(slideNext);
      }else{ //이전페이지
        showSlide(slidePrev);          
      }
    });
    
    function showSlide(n){
      //$(selector).css({"transition": "left .5s", "left": -((n - 1) * 100) + "%"});       
      $(selector).stop().animate({"left": -((n - 1) * 100) + "%"}, 800, "easeInOutExpo");       
      $("nav.gnb li a").removeClass("on");
      $("nav.gnb li a").eq(n - 1).addClass("on");
      
      slideNow = n;
      slidePrev = (n - 1) < 1 ? 1 : n - 1;
      slideNext = (n + 1) > numSlide ? numSlide : n + 1;
    }
  }
  

});