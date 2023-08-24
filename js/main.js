// // 경고창
// $(document).ready(function() {
//   alert("1920 * 1080 화면에 최적화 되어 있습니다.");
// });

// popup 1

$(function(){
  //id가 gallery인 노드의 a태그에 lightBox를 적용 시킨다
    $("#popup_wrap4 a").lightBox();
  });
$(function(){
    $("#popup_wrap4 a").lightBox({
     //배경 색 지정
      overlayBgColor:"#f00",
     //이미지가 선택되고, 흑백으로 처리 되는 주변의 불투명도 조절
      overlayOpacity:0.3,
     //이미지가 확대되는 시간
      containerResizeSpeed:100
    });
});
// popup


// 1번째 팝업
$('.design_img ul li').eq(0).click(function(){
  $('.popup_wrap1').fadeIn();
});
$('.popup_wrap1').click(function(){
  $('.popup_wrap1').fadeOut();
});
// 2번째 팝업
$('.design_img ul li').eq(1).click(function(){
  $('.popup_wrap2').fadeIn();
});
$('.popup_wrap2').click(function(){
  $('.popup_wrap2').fadeOut();
});

// 3번째 팝업
$('.design_img ul li').eq(2).click(function(){
  $('.popup_wrap4').fadeIn();
});
$('.popup_wrap4').click(function(){
  $('.popup_wrap4').fadeOut();
});


// 4번째 팝업
$('.design_img ul li').eq(3).click(function(){
  $('.popup_wrap3').fadeIn();
});
$('.popup_wrap3').click(function(){
  $('.popup_wrap3').fadeOut();
});

// 5번째 팝업
$('.design_img ul li').eq(4).click(function(){
  $('.popup_wrap5').fadeIn();
});
$('.popup_wrap5').click(function(){
  $('.popup_wrap5').fadeOut();
});

// 6번째 팝업
$('.design_img ul li').eq(5).click(function(){
  $('.popup_wrap6').fadeIn();
});
$('.popup_wrap6').click(function(){
  $('.popup_wrap6').fadeOut();
});

// 7번째 팝업
$('.design_img ul li').eq(6).click(function(){
  $('.popup_wrap7').fadeIn();
});
$('.popup_wrap7').click(function(){
  $('.popup_wrap7').fadeOut();
});

// 6번째 팝업
$('.design_img ul li').eq(7).click(function(){
  $('.popup_wrap8').fadeIn();
});
$('.popup_wrap8').click(function(){
  $('.popup_wrap8').fadeOut();
});


// 메뉴 클릭 시 이동

$('ul.gnb li a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

// Home 클릭 시 맨 위로 이동
$( 'ul.gnb li.Home' ).click( function() {
  $('html, body').animate( { scrollTop : 0 }, 300 );
  return false;
});

// contact
$('main .fig4 .circle .contact .profileimg').mouseenter(function(){
  $('.b_circle').fadeIn();
});
$('.b_circle').mouseleave(function(){
  $(this).fadeOut();
});

// chart
$(window).ready(function(){
  draw(90, '.pie-chart1', '#5474b0');
  draw(80, '.pie-chart2', '#ff8838');
  draw(75, '.pie-chart3', '#8a55d3');
  draw(75, '.pie-chart4', '#df3b3b');
  draw(70, '.pie-chart5', '#54b7d3');
  draw(30, '.pie-chart6','#ff4e00');
});

function draw(max, classname, colorname){
  var i=1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i,classname,colorname);
          i++;
      } else{
        clearInterval(func1);
      }
    },10);
}
function color1(i, classname,colorname){
  $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
  });
}


