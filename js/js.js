/**
 * Created by melodytempleton on 5/4/17.
 */
$(document).ready(function () {


    // JS FOR TOP SECTION _____________________________________________________________________________________
    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();
        $("#fog").css({
            'transform': 'translate(0px, ' + wScroll / 2.5 + '%)'
        });

    });


    // JS FOR PORTFOLIO SECTION __________________________________________________________________________________

    var furBaby = "http://furbabyfinder.site/";
    var simonPage = "https://geekchicgoddess.github.io/simple-simon/";
    var weatherPage = "https://geekchicgoddess.github.io/WeatherPredictionAPI/";
    var tictactoePage = "https://geekchicgoddess.github.io/TicTacToe/";
    var konamiPage = "https://geekchicgoddess.github.io/JQueryExercises/";
    var calculatorPage = "https://geekchicgoddess.github.io/Calculator/";
    var edsplorersPage = "https://edsplorers.com";


    function gotToProjectPage(href) { // load the actual project for the user to interact with
        window.location.href = href;
    }


    $("#furBaby").click(function () {
        gotToProjectPage(furBaby);
    });
    $("#weather").click(function () {
        gotToProjectPage(weatherPage);
    });

    $("#simon").click(function () {
        gotToProjectPage(simonPage);
    });

    $("#tictactoe").click(function () {
        gotToProjectPage(tictactoePage);
    });

    $("#konami").click(function () {
        gotToProjectPage(konamiPage);
    });

    $("#calculator").click(function () {
        gotToProjectPage(calculatorPage);
    });

    $("#edsplorers").click(function () {
        gotToProjectPage(edsplorersPage);
    });

    (function() {

        $(window).resize(function resize(){
            if ($(window).width() < 992) {
                $("#allFairyDivsWrapper").removeClass();
            }
            if ($(window).width() > 992) {
                $("#allFairyDivsWrapper").addClass("row");
            }

        }).trigger('resize');
    })();

    // JS FOR RESUME SECTION ________________________________________________________________________________

    $("#contactMe").click(function () {
        e.preventDefault();
        window.open('mailto:Melody@melodyatempleton.com');
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