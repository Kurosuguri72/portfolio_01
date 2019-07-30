$(function () {
  // function sp_open_close
  function sp_open_close() {
    if ($('#sp-icon').hasClass('sp-close')) {
      $('#sp-icon')
        .removeClass('sp-close')
        .addClass('sp-open');

      $('#navi-menu').slideDown('fast');
    } else {
      $('#sp-icon')
        .removeClass('sp-open')
        .addClass('sp-close');

      $('#navi-menu').slideUp('fast');
    }
  }
  $('#sp-icon').on('click', sp_open_close);


  // #で始まるアンカーをクリックした場合に処理
  $('.naviradio').click(function () {
    // アンカーの値取得
    const sizelimit = 420; // iPhone 6/7/8 plus の横幅
    var value = $(this).attr("value");
    if($(window).width() <= sizelimit){
      // スクロールの速度
      var speed = 400; // ミリ秒
      // 移動先を取得
      var target = $(value == "#" || value == "" ? 'html' : value);
      // 移動先を数値で取得
      var position = target.offset().top - 60;  //
      // スムーススクロール
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      if($(this).attr("id") != 'nav0'){
        sp_open_close();
      }
      return false;
    } else {
      location.hash = '#';
      sp_open_close();
    }
  });
});


// 「確認」ボタンで入力内容を取得して表示
$(function () {
  $('#submit-check').click(
    function () {
      var username = $("#user-name").val();
      $("#copy-name").text(username);
      var usermail = $("#user-email").val();
      $("#copy-email").text(usermail);
      var usertext = $("#user-opinion").val();
      $("#copy-opinion").val(usertext);
    });
});

// モーダル背景クリック時に場合分けして閉じる
$(function () {
  $('.overlay-button').click(
    function () {
    // モーダルの状態取得
      var modalphase = $('input[name=modal-phase]:checked').attr('id');
      switch (modalphase) {
        case "mdl-top":
          $('#mdl-off').prop('checked', true);
          $('#mdl-top').prop('checked', true);
          break;
        case "mdl-check":
          break;
        case "mdl-success":
          $('#mdl-off').prop('checked', true);
          $('#mdl-top').prop('checked', true);
          break;
        case "mdl-failed":
          break;
      }
    });
});

// 送信後のOKボタンでモーダルを元に戻す
$(function () {
  $('#mdl-end').click(
    function () {
      $('#mdl-off').prop('checked', true);
      $('#mdl-top').prop('checked', true);
      $("#user-name").val("");
      $("#user-email").val("");
      $("#user-opinion").val("");
    });
});


// 「送信」ボタンで入力内容を確定＋ajaxで通信
// $(function () {
//   $('#submit-confirm').click(
//     function () {
//       var hostUrl = 'http://localhost:8080/';
//       var param1 = 100;
//       var param2 = 200;
//       var param3 = 300;
//       $.ajax({
//         url: hostUrl,
//         type: 'POST',
//         dataType: 'json',
//         data: {
//           parameter1: param1,
//           parameter2: param2,
//           parameter3: param3
//         },
//         timeout: 10000,
//       }).done(function (data) {
//         alert("connect ok");
//       }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
//         alert("connect error");
//       })
//     });
// });
