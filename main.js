$('.open').click(function(){
$('.menu_hamburger').addClass('active')
})

$('.open').mouseenter(function(){
    $('.open').css({'transform':'rotate( 180deg )','transition':'3s','box-shadow':'0px 0px 3px 3px white'})
})
$('.open').mouseleave(function(){
    $('.open').css({'transform':'rotate( 0deg)','transition':'3s','box-shadow':'0px 0px 0px 0px white'})
})


$('.close').click(function(){
    alert('chiuderai il menu')
    $('.menu_hamburger').removeClass('active')
    })