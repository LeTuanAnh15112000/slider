
$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 3, //hiiện bao nhiêu item 
        slidesToScroll: 2, //bấm 1 lần dịch qua 2 ảnh
        infinite: true, // chạy vô tận 
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true, // nút prev và next false thì ẩn đi
        draggable: true, //mặc định là true này có nghĩ là khi ta kéo ảnh trên slider thì nó sẽ chạy
        dots: true, // mấy dấu chấm ở dưới
        // 2 thẻ i là icon ta có thể tự lấy

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],

        prevArrow:`<button type='button' class='slick-prev slick-arrow pull-left'>
        <i class="fa-solid fa-circle-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow pull-right'>
        <i class="fa-solid fa-circle-right"></i></button>`
});
  });
      