$(document).ready(function() {
    $('#carousel-logos').carousel({
        interval: 10000
    });
    
    $(document).scroll(function () {
        var $nav = $(".navbar-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
      
});