$(document).ready(function(){
    $('.reviews_item').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  //Modal
  $('[data-modal=order]').on('click', function(){
    $('.overlay, #order').fadeIn('slow');
  });

  $('.modal__close, .mini__close').on('click', function(){
    $('.overlay, #order, #thanks, #thanks2').fadeOut('slow');
  });

  $('.catalog_button').on('click', function(){
    $('.overlay, #order').fadeIn('slow');
  });

  $('.catalog_button').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog_subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      $('#order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');

    });
    return false;
  });
  $(".menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),    
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
  function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
       scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
  }
});
