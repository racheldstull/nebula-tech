//sticky header for the very top header on product pages
function createSticky() {
    $(window).scroll(function(){
        var sticky = $('#header'),
            scroll = $(window).scrollTop();

        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
}

//function that scrolls down to sections in a page via anchor when clicking on a navigation item
function scroll(){
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });
}

//dropdown menu
function dropdown(){
    $("nav #topHeader .center .bars").click(function() {
        $("ul").slideToggle();
        $("ul ul").css("display", "none");
    });

    $("ul li").click(function() {
        $("ul ul").slideUp();
        $(this).find('ul').slideToggle();
    });

    $(window).resize(function() {
        if($(window).width() > 768) {
            $("ul").removeAttr('style');
        }
    });
}

//slide for selecting various options when purchasing an item
function slideToggle(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
}


$(document).ready(function (){
    scroll();
    createSticky();
    dropdown();
    slideToggle();
});