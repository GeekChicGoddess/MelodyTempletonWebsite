/**
 * Created by melodytempleton on 5/4/17.
 */
$(document).ready(function(){

    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();
        $("#fog").css({
            'transform' : 'translate(0px, '+wScroll /2.5 +'%)'
        });

    });

    $('#profile a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#profC a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

});