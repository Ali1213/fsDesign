$(document).ready(function(){
    $('.container .main span').click(function(){
        console.log( $(this))
        $(this).parents('.container').find('.detail').toggle()
    })

    $('.container .detail').click(function(){
        $(this).toggle()
    })
})