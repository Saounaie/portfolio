$(document).ready(() => {
    $(window).scroll(() => {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});
/* Toogle menu navbar script*/

$('.menu-btn').click(() => {
    console.log("click");
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});






//typing animation
var typed = new Typed(".typing", {
    strings: ["Developer", "étudiant", "en bts SIO", "à Nîmes"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Developer", "étudiant", "en bts SIO", "à Nîmes"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$(document).on('click', '.project-filter li', function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
})

// project gallery
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.project-box').show('1000');
        }else{
            $('.project-box').not('.' + value).hide('1000');
            $('.project-box').filter('.' + value).show('1000');
        }
    })
})
