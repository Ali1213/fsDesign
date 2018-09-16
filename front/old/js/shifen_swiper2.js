window.onload = function() {
    $('.swiper-tabs').each(function() {
        swiperTabs($(this));
    });
    $('.swiper-banner').each(function() {
        swiperBanner($(this));
    });
    $('.swiper-items').each(function() {
        swiperItems($(this));
    })

}


function swiperItems(obj) {
    var obj_swiper = obj.find(".swiper-container");
    var pagination = obj.find(".swiper-pagination");
    var button_next = obj.find(".swiper-button-next");
    var button_prev = obj.find(".swiper-button-prev");

    var per_view = obj_swiper.data("per-view");
    //alert(per_view);
    if (!per_view) {
        per_view = 6;
    }

    var itemsSwiper = new Swiper(obj_swiper, {
        loop: true,
        autoplay: 5000,
        slidesPerView: per_view,
        slidesPerGroup: 6,
        spaceBetween: 30,
        breakpoints: {
            //当宽度小于等于320
            320: {
                slidesPerView: 1,
                spaceBetweenSlides: 10

            },
            //当宽度小于等于480
            480: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            },
            //当宽度小于等于640
            640: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            }
        },
        // 如果需要分页器
        //pagination: pagination,
        // paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: button_next,
        prevButton: button_prev,
    })

}
function swiperBanner(obj) {
    var obj_swiper = obj.find(".swiper-container");
    var pagination = obj.find(".swiper-pagination");
    var button_next = obj.find(".swiper-button-next");
    var button_prev = obj.find(".swiper-button-prev");
    var direction="horizontal";
    var loop=true;
    if(obj.hasClass("swiper-banner-vertical")){
        direction='vertical';
        loop=false;
    }
    
    var bannerSwiper = new Swiper(obj_swiper, {
        direction: direction,
        loop: loop,
        autoplay: 2000,
        // 如果需要分页器
        pagination: pagination,
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: button_next,
        prevButton: button_prev,
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        mousewheelReleaseOnEdges: true,
    })

}


function swiperTabs(obj) {
    //var obj = $(objName);
    var obj_hd = obj.find(".tabs-hd");
    var obj_swiper = obj.find(".swiper-container");
    var tabsSwiper = new Swiper(obj_swiper, {
        speed: 500,
        effect: "fade",
        onSlideChangeStart: function() {
            obj_hd.find(".active").removeClass('active');
            obj_hd.find("a").eq(tabsSwiper.activeIndex).addClass('active');
        }
    });
    obj_hd.find("a").eq(0).addClass('active');
    obj_hd.find("li a").on('touchstart mouseover', function(e) {
        e.preventDefault();
        obj_hd.find(".active").removeClass('active');
        $(this).addClass('active');
        // alert($(this).parent().index());
        tabsSwiper.slideTo($(this).parent().index());
    });
    obj_hd.find("a").click(function(e) {
        //e.preventDefault();
    })
}