$(function(){
  // 学習言語ホバー機能
  $('.lesson-hover').hover(
    function(){
      $(this).find('.text-contents').addClass('text-active');
    },
    function(){
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // 「もっと詳しく」ボタン
  $('.btn').click(function() {
    var $answer = $('.answer');
    if ($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).children('span').text('+');
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください  
      $(this).children('span').text('-');    
    }
  });
  // };

  // コラム
  $('.caption-defaultWrap-hover').hover(
    function(){
      $(this).find('.caption-defaultWrap').addClass('.caption-defaultWrap-active');
  },function (){
    $(this).find('.caption-defaultWrap').removeClass('.caption-defaultWrap-active');
  }
  );

  // ヘッダーのスクロールナビ
  // $('.gengo').click(function() {
  //   $("html,body").animate({scrollTop:$('.heading').offset().top});
  // });

  $('.navigation').click(function() {
    // hrefの値を取得
    var id = $(this).attr('href');
    // 飛び先の上からの距離
    var position = $(id).offset().top;
    $("html,body").animate({scrollTop: position}, 1000);
  });
});