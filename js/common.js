'use strict';
$(function() {
    
    //a 링크 동작 막기
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });
    
    setParallax();   
    function setParallax() {
        var numPage = $('.scroll-page').length;
        var pageNow = 0;
        var pagePrev = 0;
        var pageNext = 0;
        var direction = 0;
        var isWheelBlocked = false;
        var timerId = '';
        var effectTimerId = '';
        
        $('.scroll-page').each(function(i) {
            $(this).css({'top': (i * 100) + '%'});
            $(this).prepend('<a href="#" class="hidden start">' + (i + 1) + '번 페이지 시작</a>').append('<a href="#" class="hidden end">' + (i + 1) + '번 페이지 끝</a>');
        });
        showPage(1);
        $('.fixed-box:eq(0)').addClass('up');
        
        //gnb
        $('#btn a').on('click', function() {
            $(this).parent().toggleClass('open');
        });
        $('#gnb ul li a').on('click', function() {
            var index = $('#gnb ul li').index($(this).parent());
            showPage(index + 1);
            $('#header div.menu').removeClass('open');
            $('.fixed-box:eq(' + index + ')').addClass('down');
        });
        $('#control a.prev').on('click', function() {
            if (pageNow === 1) { //첫 페이지에서 실행 안함
                return false;
            } else {
                showPage(pagePrev);
            }
        });
        $('#control a.next').on('click', function() {
            if (pageNow === numPage) { //마지막 페이지에서 실행 안함
                return false;
            } else {
                showPage(pageNext);
            }
        });
        $(window).on('mousewheel DOMMouseScroll', function(e) {
            clearTimeout(timerId);
            timerId = setTimeout(function() {isWheelBlocked = false}, 300);
            if (isWheelBlocked === true) return false;
            isWheelBlocked = true;
            //정규화
             if (e.originalEvent.wheelDelta === undefined) { //FF
                direction = e.originalEvent.detail / 3;
            } else { //표준
                direction = e.originalEvent.wheelDelta / -120;
            }
            if (direction > 0) { //mousewheel down 
                if (pageNow === numPage) {
                    return false;
                } else {
                    showPage(pageNext);
                }
            } else { //mousewheel up
                if (pageNow === 1) {
                    return false;
                } else {
                    showPage(pagePrev);
                }
            }
        });
        
        function showPage(n) {
            console.log(n);
            clearTimeout(effectTimerId);
            if (pageNow === 0) {
                $('#background').css({'transition': 'none'});
            } else {
                $('#background').css({'transition': 'top 0.5s ease-in-out'});
            }
            $('#background').css({'top': -((n - 1) * 100) + '%'});
            $('#gnb > ul > li').removeClass('on');
            $('#gnb > ul > li:eq(' + (n - 1) + ')').addClass('on');
            $('.fixed-box').removeClass('up down hide-down hide-up');
            if (n === pageNext) {
            $('.fixed-box:eq(' + (n - 2) + ')').addClass('hide-down');
                effectTimerId = setTimeout(function() {
                    $('.fixed-box:eq(' + (n - 2) + ')').removeClass('hide-down');
                    $('.fixed-box:eq(' + (n - 1) + ')').addClass('up');
                }, 300);
            } else if (n === pagePrev) {
                $('.fixed-box:eq(' + n + ')').addClass('hide-up');
                effectTimerId = setTimeout(function() {
                     $('.fixed-box:eq(' + n + ')').removeClass('hide-up');
                     $('.fixed-box:eq(' + (n - 1) + ')').addClass('down');
                }, 300);
            }
            pageNow = n;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
            pageNext = (n + 1) > numPage ? numPage : n + 1;
        }
        
    }


});
