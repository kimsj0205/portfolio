// // 경고창
// $(document).ready(function() {
//   alert("1920 * 1080 화면에 최적화 되어 있습니다.");
// });

// popup

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
