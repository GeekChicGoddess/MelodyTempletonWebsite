/**
 * Created by melodytempleton on 5/4/17.
 */
$(document).ready(function(){


    // JS FOR TOP SECTION _____________________________________________________________________________________
    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();
        $("#fog").css({
            'transform' : 'translate(0px, '+wScroll /2.5 +'%)'
        });

    });


    // JS FOR PORTFOLIO SECTION __________________________________________________________________________________
    var widthGrowAmount = 100;
    var heightGrowAmount = 50;
    var simonPage = "https://geekchicgoddess.github.io/simple-simon/";
    var weatherPage = "https://geekchicgoddess.github.io/WeatherPredictionAPI/";
    var tictactoePage = "https://geekchicgoddess.github.io/TicTacToe/";
    var konamiPage = "https://geekchicgoddess.github.io/JQueryExercises/";
    var calculatorPage = "https://geekchicgoddess.github.io/Calculator/";

    function shiftToTopLeft (id){ // thumbnail and sparkle move (animated) to top left corner before growth begins
        var theElement = $(id);
        var elementPosition = theElement.position();
        var currentLeft = elementPosition.left;
        var currentTop = elementPosition.top;
        $(id).css( "position", "fixed");

        var startInCorner = setInterval(function(){

            if(currentLeft>0 || currentTop>0) {
                currentTop-=10;
                currentLeft-=20;
                $(id).css({
                    "top": currentTop,
                    "left": currentLeft
                });
            }

            else{ clearInterval(startInCorner); }
        }, 35);
    }


    function grow(id){ // animate the growth of the thumbnail and the sparkle to fill the page
        var sparkleGrowBig = setInterval(function(){
            if(widthGrowAmount<1800) {
                widthGrowAmount++;
                heightGrowAmount++;
                $(id).css({
                    "width": widthGrowAmount + 100+ "px",
                    "height": heightGrowAmount + 100 + "px"
                });
            }
            else{ clearInterval(sparkleGrowBig); }
        },5);
    }

    function moveRight(id) { // the sparkle needs to shift right to stay center in the "thumbnail" when it fills the screen
        var rightMove = setTimeout(function(){
            $(id).css("margin-left", "20%");

        }, 1500);
    }

    function gotToProjectPage (href){ // load the actual project for the user to interact with
       var projectPageRelocation = setTimeout(function(){
            window.location.href = href;
        }, 5000);
    }

    function makeTheMagicHappen (sparkleID, thumbnailID, address) {
        $(sparkleID).css({
            "display": "block",
            "position": "relative"
        });
        shiftToTopLeft(sparkleID);
        shiftToTopLeft(thumbnailID);
        grow(sparkleID);
        grow(thumbnailID);
        moveRight(sparkleID);
        gotToProjectPage(address);
    }

    $("#weather").click(function(){
        makeTheMagicHappen("#weatherSparkle", "#weather", weatherPage);
    });

    $("#simon").click(function(){
        makeTheMagicHappen("#simonSparkle", "#simon", simonPage);
    });

    $("#tictactoe").click(function(){
        makeTheMagicHappen("#tictactoeSparkle", "#tictactoe", tictactoePage);
    });

    $("#konami").click(function(){
        makeTheMagicHappen("#konamiSparkle", "#konami", konamiPage);
    });

    $("#calculator").click(function(){
        makeTheMagicHappen("#calculatorSparkle", "#calculator", calculatorPage);
    });




   // JS FOR RESUME SECTION ________________________________________________________________________________

    $("#contactMe").click(function () {
        // e.preventDefault();
        window.open('mailto:Melody@geekchicgoddess.com');
    })


    $('#profile a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#profC a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

});