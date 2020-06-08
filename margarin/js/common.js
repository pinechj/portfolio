

//gnb 모바일
 $('.gnb>button').click(function(){
  $(this).next().slideToggle(200); //다음에오는 요소를 슬라이드 토글한다 0.2초동안
 });




//순서가 바뀌면 잘 안될 수도 있다. 

 // lookbook -> lookbook_detail 화면
 $('.product_list').find('li').click(function(e){
  // e.preventDefault();
  // return false; 둘 중 하나만 적용 -> 기본 html에 등록된 이벤트 해제

  location.href="lookbook_detail.html?img=" + $(this).index();  
  return false;
 });



// lookbook_detail_list -> lookbook_detail 화면
 $('.slide_list').find('li').click(function(e){
  // e.preventDefault();
  // return false; 둘 중 하나만 적용 -> 기본 html에 등록된 이벤트 해제

  location.href="lookbook_detail.html?img=" + $(this).index();  
  return false;
 });


// 탑으로 이동 버튼
$('.top_btn').click(function(){  
    $('body').animate({ scrollTop: 0 }, 100); 
});
 
 
// 스크롤 했을 때 탑 버튼 보이기 
// top버튼
$('.top_btn').hide();
 
var topBtnPosY = 400; // 메뉴의 위치를 파악
 
$(window).scroll( function() {      // 스크롤이 발생하면 ~
  if ( $( document ).scrollTop() > topBtnPosY ) {
      $('.top_btn').fadeIn(500);
      
  } else { // 반대의 경우에는
       $('.top_btn').fadeOut(500);
 
  }
});