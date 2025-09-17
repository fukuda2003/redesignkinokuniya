


//スライダー//
rtl: true,

$('.slider').slick({
  zIndex: 800,
});

$(function () {
  var $slider4 = $('#js-slider-4');
  
  $slider4.slick({
    arrows: false, // 前・次のボタンを表示しない
    dots: true, // ドットナビゲーションを表示する
    fade: true, // スライド切り替えをフェード
    autoplay: false, //自動再生させない
    slidesToShow: 1, // 表示させるスライド数
  });
  
  /*--- プログレスバー設定 -----------------------*/
  var
    time = 3,
    $bar = $('#js-progressBar'),
    isPause,
    tick,
    percentTime;
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slider4.slick('slickNext');
        startProgressbar();
      }
    }
  }
  function resetProgressbar() {
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }
  startProgressbar();
    
  // カーソルが乗ったら止める
  $slider4.on({
    mouseenter: function () { isPause = true; },
    mouseleave: function () { isPause = false; }
  });
    
  // ドットがクリックされたら再発火(スライド切り替え前のイベント)
  $slider4.on('beforeChange', function (slick, currentSlide, nextSlide) {
    startProgressbar();
  });
});


//作品//
$(function () {
  $(".test-slick").slick({
      arrows: true,
      prevArrow: '<img src="images/the work visual/nausicaa.jpg" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="images/the work visual/kimitachi.jpg" class="slide-arrow next-arrow">',
      autoplay: true,
      centerMode: true,
      centerPadding: "5%",
      slidesToShow: 3,
      dots: false,
  });
});