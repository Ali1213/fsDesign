$(document).ready(function(){
    $('.container .main span').click(function(){
        console.log( $(this))
        $(this).parents('.main').toggleClass('main-hasshadow').parents('.container').find('.detail').slideToggle(300)
    })

    $('.container .detail').click(function(){
        $(this).slideToggle(300)
        $(this).parents('.container').find('.main').toggleClass('main-hasshadow')
    })
})