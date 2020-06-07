$(function () {
    'use strict';

    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('.menu_btn').on('click', function () {
        $('.menu_line').toggleClass('closed')
        $('div.gnb').toggleClass('closed')
        $('.header_imgbox').toggleClass('closed')
    });

    // h2
    $('.sec_01 h').find('span').each(function (i) {
        $(this).css({
            'position': '',
            'left': '',
            'opacity': 0
        });
        $(this).stop(true).delay(500).delay(i * 100).animate({
            'left': 0,
            'opacity': 1
        }, 1000);
    });

    setPaging();

    function setPaging() {
        var numPage = $('section').length;
        console.log(numPage)
        var pageNow = 0;
        var pageNext = 0;
        var pagePrev = 0;
        var onWheel = false;
        var onAnimation = false; //애니매이션
        var direction = 0; // 1 : 다음페이지(down), -1 : 이전페이지(up)
        var timerId = '';

        showPage(1);

        $(window).on('mousewheel DOMMouseScroll', function (e) {
            console.log('onWheel');
            clearTimeout(timerId); //마우스휠 통제
            timerId = setTimeout(function () {
                onWheel = false;
            }, 100);
            if (onWheel === true || onAnimation === true) return false;
            onWheel = true;
            console.log('wheel start!');
            if (e.originalEvent.wheelDelta) { // 표준 브라우저
                direction = e.originalEvent.wheelDelta / -120;
            } else { // FF
                direction = e.originalEvent.detail / 3;
            }
            if (direction > 0) {
                showPage(pageNext);
            } else {
                showPage(pagePrev);
            }
        });
        
        $('section').on('focusin', function () {
            var index = $('section').index($(this));
            showPage(index + 1);
        });

        function showPage(n) {
            if (pageNow === n) return false;
           
            //statusbox1 - 웹(마가린 태연 이니스프리 미니해치)
            
            if (n === 1) {
                $('#header #statusbox1 .status').css({
                    'transform': 'scaleX(0)'
                });
            }
            
            if (n === 2) {
                $('#header #statusbox1 .status').css({
                    'transform': 'scaleX(.166)'
                });
            }
            
            if (n === 3) {
                $('#header #statusbox1 .status').css({
                    'transform': 'scaleX(.333)'
                });
            }
            
            if (n === 4) {
                $('#header #statusbox1 .status').css({
                    'transform': 'scaleX(.498)'
                });
            }
            
            if (n === 5) {
                $('#header #statusbox1 .status').css({
                    'transform': 'scaleX(.664)'
                });
            }
            
            if (n === 6) {
                $('#header #statusbox1 .status').css({
                    'transform': 'scaleX(.830)'
                });
            }
            
            if (n === 7) {
                $('#header #statusbox1 .status').css({
                    'transform': 'scaleX(1)'
                });
            }
            
           
            if (pageNow !== 0) {
                onAnimation = true;
                $('section').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translate(' + (-(n - 1) * 100) + '% ,0)'
                }).one('transitionend', function () {
                    onAnimation = false;
                });
            }
            pageNow = n;
            pageNext = (n + 1) > numPage ? numPage : n + 1;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
        }
    }
});

//statusbox2 - 화사한 4page

$(function () {
    'use strict';

    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('.menu_btn').on('click', function () {
        $('.menu_line').toggleClass('closed')
        $('div.gnb').toggleClass('closed')
        $('.header_imgbox').toggleClass('closed')
    });

    
    setPaging();

    function setPaging() {
        var numPage = $('section').length;
        console.log(numPage)
        var pageNow = 0;
        var pageNext = 0;
        var pagePrev = 0;
        var onWheel = false;
        var onAnimation = false; //애니매이션
        var direction = 0; // 1 : 다음페이지(down), -1 : 이전페이지(up)
        var timerId = '';

        showPage(1);

        $(window).on('mousewheel DOMMouseScroll', function (e) {
            console.log('onWheel');
            clearTimeout(timerId); //마우스휠 통제
            timerId = setTimeout(function () {
                onWheel = false;
            }, 100);
            if (onWheel === true || onAnimation === true) return false;
            onWheel = true;
            console.log('wheel start!');
            if (e.originalEvent.wheelDelta) { // 표준 브라우저
                direction = e.originalEvent.wheelDelta / -120;
            } else { // FF
                direction = e.originalEvent.detail / 3;
            }
            if (direction > 0) {
                showPage(pageNext);
            } else {
                showPage(pagePrev);
            }
        });
        
        $('section').on('focusin', function () {
            var index = $('section').index($(this));
            showPage(index + 1);
        });

        function showPage(n) {
            if (pageNow === n) return false;
           

            
            if (n === 1) {
                $('#header #statusbox2 .status').css({
                    'transform': 'scaleX(0)'
                });
            }
            
            if (n === 2) {
                $('#header #statusbox2 .status').css({
                    'transform': 'scaleX(.333)'
                });
            }
            
            if (n === 3) {
                $('#header #statusbox2 .status').css({
                    'transform': 'scaleX(.666)'
                });
            }
            
            if (n === 4) {
                $('#header #statusbox2 .status').css({
                    'transform': 'scaleX(1)'
                });
            }
        
            
           
            if (pageNow !== 0) {
                onAnimation = true;
                $('section').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translate(' + (-(n - 1) * 100) + '% ,0)'
                }).one('transitionend', function () {
                    onAnimation = false;
                });
            }
            pageNow = n;
            pageNext = (n + 1) > numPage ? numPage : n + 1;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
        }
    }
});




//statusbox3 - 말씀카드 샤넬 3page

$(function () {
    'use strict';

    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('.menu_btn').on('click', function () {
        $('.menu_line').toggleClass('closed')
        $('div.gnb').toggleClass('closed')
        $('.header_imgbox').toggleClass('closed')
    });

    
    setPaging();

    function setPaging() {
        var numPage = $('section').length;
        console.log(numPage)
        var pageNow = 0;
        var pageNext = 0;
        var pagePrev = 0;
        var onWheel = false;
        var onAnimation = false; //애니매이션
        var direction = 0; // 1 : 다음페이지(down), -1 : 이전페이지(up)
        var timerId = '';

        showPage(1);

        $(window).on('mousewheel DOMMouseScroll', function (e) {
            console.log('onWheel');
            clearTimeout(timerId); //마우스휠 통제
            timerId = setTimeout(function () {
                onWheel = false;
            }, 100);
            if (onWheel === true || onAnimation === true) return false;
            onWheel = true;
            console.log('wheel start!');
            if (e.originalEvent.wheelDelta) { // 표준 브라우저
                direction = e.originalEvent.wheelDelta / -120;
            } else { // FF
                direction = e.originalEvent.detail / 3;
            }
            if (direction > 0) {
                showPage(pageNext);
            } else {
                showPage(pagePrev);
            }
        });
        
        $('section').on('focusin', function () {
            var index = $('section').index($(this));
            showPage(index + 1);
        });

        function showPage(n) {
            if (pageNow === n) return false;
           

            
            if (n === 1) {
                $('#header #statusbox3 .status').css({
                    'transform': 'scaleX(0)'
                });
            }
            
            if (n === 2) {
                $('#header #statusbox3 .status').css({
                    'transform': 'scaleX(.5)'
                });
            }
            
            if (n === 3) {
                $('#header #statusbox3 .status').css({
                    'transform': 'scaleX(1)'
                });
            }
           
            if (pageNow !== 0) {
                onAnimation = true;
                $('section').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translate(' + (-(n - 1) * 100) + '% ,0)'
                }).one('transitionend', function () {
                    onAnimation = false;
                });
            }
            pageNow = n;
            pageNext = (n + 1) > numPage ? numPage : n + 1;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
        }
    }
});



//statusbox4 - 순서지 소확행 2page

$(function () {
    'use strict';

    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('.menu_btn').on('click', function () {
        $('.menu_line').toggleClass('closed')
        $('div.gnb').toggleClass('closed')
        $('.header_imgbox').toggleClass('closed')
    });

    
    setPaging();

    function setPaging() {
        var numPage = $('section').length;
        console.log(numPage)
        var pageNow = 0;
        var pageNext = 0;
        var pagePrev = 0;
        var onWheel = false;
        var onAnimation = false; //애니매이션
        var direction = 0; // 1 : 다음페이지(down), -1 : 이전페이지(up)
        var timerId = '';

        showPage(1);

        $(window).on('mousewheel DOMMouseScroll', function (e) {
            console.log('onWheel');
            clearTimeout(timerId); //마우스휠 통제
            timerId = setTimeout(function () {
                onWheel = false;
            }, 100);
            if (onWheel === true || onAnimation === true) return false;
            onWheel = true;
            console.log('wheel start!');
            if (e.originalEvent.wheelDelta) { // 표준 브라우저
                direction = e.originalEvent.wheelDelta / -120;
            } else { // FF
                direction = e.originalEvent.detail / 3;
            }
            if (direction > 0) {
                showPage(pageNext);
            } else {
                showPage(pagePrev);
            }
        });
        
        $('section').on('focusin', function () {
            var index = $('section').index($(this));
            showPage(index + 1);
        });

        function showPage(n) {
            if (pageNow === n) return false;
           

            
            if (n === 1) {
                $('#header #statusbox4 .status').css({
                    'transform': 'scaleX(0)'
                });
            }
            
            if (n === 2) {
                $('#header #statusbox4 .status').css({
                    'transform': 'scaleX(1)'
                });
            }
            
           
            if (pageNow !== 0) {
                onAnimation = true;
                $('section').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translate(' + (-(n - 1) * 100) + '% ,0)'
                }).one('transitionend', function () {
                    onAnimation = false;
                });
            }
            pageNow = n;
            pageNext = (n + 1) > numPage ? numPage : n + 1;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
        }
    }
});




//statusbox5 - 유니크 5page

$(function () {
    'use strict';

    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('.menu_btn').on('click', function () {
        $('.menu_line').toggleClass('closed')
        $('div.gnb').toggleClass('closed')
        $('.header_imgbox').toggleClass('closed')
    });

    
    setPaging();

    function setPaging() {
        var numPage = $('section').length;
        console.log(numPage)
        var pageNow = 0;
        var pageNext = 0;
        var pagePrev = 0;
        var onWheel = false;
        var onAnimation = false; //애니매이션
        var direction = 0; // 1 : 다음페이지(down), -1 : 이전페이지(up)
        var timerId = '';

        showPage(1);

        $(window).on('mousewheel DOMMouseScroll', function (e) {
            console.log('onWheel');
            clearTimeout(timerId); //마우스휠 통제
            timerId = setTimeout(function () {
                onWheel = false;
            }, 100);
            if (onWheel === true || onAnimation === true) return false;
            onWheel = true;
            console.log('wheel start!');
            if (e.originalEvent.wheelDelta) { // 표준 브라우저
                direction = e.originalEvent.wheelDelta / -120;
            } else { // FF
                direction = e.originalEvent.detail / 3;
            }
            if (direction > 0) {
                showPage(pageNext);
            } else {
                showPage(pagePrev);
            }
        });
        
        $('section').on('focusin', function () {
            var index = $('section').index($(this));
            showPage(index + 1);
        });

        function showPage(n) {
            if (pageNow === n) return false;
           

            
            if (n === 1) {
                $('#header #statusbox5 .status').css({
                    'transform': 'scaleX(0)'
                });
            }
            
            if (n === 2) {
                $('#header #statusbox5 .status').css({
                    'transform': 'scaleX(.25)'
                });
            }
            
            
             if (n === 3) {
                $('#header #statusbox5 .status').css({
                    'transform': 'scaleX(.5)'
                });
            }
            
             if (n === 4) {
                $('#header #statusbox5 .status').css({
                    'transform': 'scaleX(.75)'
                });
            }
            
             if (n === 5) {
                $('#header #statusbox5 .status').css({
                    'transform': 'scaleX(1)'
                });
            }
            
           
            if (pageNow !== 0) {
                onAnimation = true;
                $('section').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translate(' + (-(n - 1) * 100) + '% ,0)'
                }).one('transitionend', function () {
                    onAnimation = false;
                });
            }
            pageNow = n;
            pageNext = (n + 1) > numPage ? numPage : n + 1;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
        }
    }
});


