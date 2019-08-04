$(document).ready(function () {
    $("head").append("<link></link>")
    $("link").attr({
        "rel": "stylesheet",
        "href": "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    });
    $("body").prepend("<footer></footer>");
    $("body").prepend("<main></main>");
    $("body").prepend("<header></header>");

    // Header
    $("header").append("<nav></nav>");
    $("nav").addClass("navbar bg-dark fixed-top");
    $("nav").append("<div></div>");
    $("div").addClass("container");
    $(".container").append("<div></div>");
    $(".container").append("<div></div>");
    $(".container div:nth-child(1)").addClass("col-6 logo");
    $(".container div:nth-child(2)").addClass("col-6 content d-flex justify-content-end");
    $(".logo").append("<a></a>");
    $(".content").append("<a></a>");
    $(".content").append("<a></a>");
    $(".content").append("<a></a>");
    $(".content").append("<a></a>");
    $(".logo a").text("Start Bootstrap").css({ "color": "white", "font-size": "20px" }).attr({ "href": "#" });
    $(".content a:nth-child(1)").text("Home").css({ "color": "white" }).attr({ "href": "#" }).addClass("active");
    $(".content a:nth-child(2)").text("About").css({ "color": "rgba(255,255,255,.5)" }).attr({ "href": "#" });
    $(".content a:nth-child(3)").text("Services").css({ "color": "rgba(255,255,255,.5)" }).attr({ "href": "#" });
    $(".content a:nth-child(4)").text("Contact").css({ "color": "rgba(255,255,255,.5)" }).attr({ "href": "#" });
    $("nav").find("a").addClass("nav-link");
    $(".content a:nth-child(2)").hover(function () {
        $(this).css("color", "#CCCEB8");
    },
        function () {
            $(this).css("color", "rgba(255,255,255,.5)");
        });
    $(".content a:nth-child(3)").hover(function () {
        $(this).css("color", "#CCCEB8");
    },
        function () {
            $(this).css("color", "rgba(255,255,255,.5)");
        });
    $(".content a:nth-child(4)").hover(function () {
        $(this).css("color", "#CCCEB8");
    },
        function () {
            $(this).css("color", "rgba(255,255,255,.5)");
        });

// Warm Welcome Section

    $("main").append("<section></section>");
    $("main section:nth-child(1)").attr({ "id": "warmwelcome-section" });
    $("#warmwelcome-section").append("<div></div>");
    $("#warmwelcome-section div").addClass("container forjumbotron");
    $("#warmwelcome-section .forjumbotron").append("<div></div>");
    $(".forjumbotron div").addClass("jumbotron my-4");
    $(".jumbotron").append("<h1></h1>","<p></p>","<a></a>");
    $(".jumbotron h1").addClass("display-3").text("A Warm Welcome!");
    $(".jumbotron p").addClass("lead").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.");
    $(".jumbotron a").attr({"href" : "#"}).addClass("btn btn-primary btn-lg").text("Call to action!");

// Cards Section

$("main").append("<section></section>");
$("main section:nth-child(2)").attr({ "id": "cards-section" });
$("#cards-section").append("<div></div>");
$("#cards-section div").addClass("container forcards");
$("#cards-section .forcards").append("<div></div>");
$(".forcards div").addClass("row text-center forcardsrow");
$(".forcards .forcardsrow").append("<div></div>")
$(".forcards .forcardsrow").append("<div></div>")
$(".forcards .forcardsrow").append("<div></div>")
$(".forcards .forcardsrow").append("<div></div>")
$(".forcardsrow div:nth-child(1)").addClass("col-3 imagecol1 mb-4");
$(".forcardsrow div:nth-child(2)").addClass("col-3 imagecol2 mb-4");
$(".forcardsrow div:nth-child(3)").addClass("col-3 imagecol3 mb-4");
$(".forcardsrow div:nth-child(4)").addClass("col-3 imagecol4 mb-4");
$(".forcardsrow .imagecol1").append("<div></div>");
$(".forcardsrow .imagecol2").append("<div></div>");
$(".forcardsrow .imagecol3").append("<div></div>");
$(".forcardsrow .imagecol4").append("<div></div>");
$(".imagecol1 div:nth-child(1)").addClass("card h-100 fortemplatecards1");
$(".imagecol2 div:nth-child(1)").addClass("card h-100 fortemplatecards2");
$(".imagecol3 div:nth-child(1)").addClass("card h-100 fortemplatecards3");
$(".imagecol4 div:nth-child(1)").addClass("card h-100 fortemplatecards4");
$(".imagecol1 .fortemplatecards1").append("<img>");
$(".imagecol2 .fortemplatecards2").append("<img>");
$(".imagecol3 .fortemplatecards3").append("<img>");
$(".imagecol4 .fortemplatecards4").append("<img>");
$(".fortemplatecards1 img").addClass("card-img-top").attr({"src" : "http://placehold.it/500x325", "alt" : "This is image" });
$(".fortemplatecards2 img").addClass("card-img-top").attr({"src" : "http://placehold.it/500x325", "alt" : "This is image" });
$(".fortemplatecards3 img").addClass("card-img-top").attr({"src" : "http://placehold.it/500x325", "alt" : "This is image" });
$(".fortemplatecards4 img").addClass("card-img-top").attr({"src" : "http://placehold.it/500x325", "alt" : "This is image" });
$(".imagecol1 .fortemplatecards1").append("<div></div>");
$(".imagecol2 .fortemplatecards2").append("<div></div>");
$(".imagecol3 .fortemplatecards3").append("<div></div>");
$(".imagecol4 .fortemplatecards4").append("<div></div>");
$(".fortemplatecards1 div:nth-child(2)").addClass("card-body fortempcardbody1")
$(".fortemplatecards2 div:nth-child(2)").addClass("card-body fortempcardbody2")
$(".fortemplatecards3 div:nth-child(2)").addClass("card-body fortempcardbody3")
$(".fortemplatecards4 div:nth-child(2)").addClass("card-body fortempcardbody4")
$(".fortempcardbody1").append("<h4></h4>");
$(".fortempcardbody1 h4").addClass("card-title").text("Card title");
$(".fortempcardbody1").append("<p></p>");
$(".fortempcardbody1 p").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.");
$(".fortempcardbody2").append("<h4></h4>");
$(".fortempcardbody2 h4").addClass("card-title").text("Card title");
$(".fortempcardbody2").append("<p></p>");
$(".fortempcardbody2 p").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.");
$(".fortempcardbody3").append("<h4></h4>");
$(".fortempcardbody3 h4").addClass("card-title").text("Card title");
$(".fortempcardbody3").append("<p></p>");
$(".fortempcardbody3 p").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.");
$(".fortempcardbody4").append("<h4></h4>");
$(".fortempcardbody4 h4").addClass("card-title").text("Card title");
$(".fortempcardbody4").append("<p></p>");
$(".fortempcardbody4 p").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.");
$(".imagecol1 .fortemplatecards1").append("<div></div>");
$(".imagecol2 .fortemplatecards2").append("<div></div>");
$(".imagecol3 .fortemplatecards3").append("<div></div>");
$(".imagecol4 .fortemplatecards4").append("<div></div>");
$(".fortemplatecards1 div:nth-child(3)").addClass("card-footer fortempcardfooter1")
$(".fortemplatecards2 div:nth-child(3)").addClass("card-footer fortempcardfooter2")
$(".fortemplatecards3 div:nth-child(3)").addClass("card-footer fortempcardfooter3")
$(".fortemplatecards4 div:nth-child(3)").addClass("card-footer fortempcardfooter4")
$(".fortempcardfooter1").append("<a></a>");
$(".fortempcardfooter1 a").addClass("btn btn-primary").text("Find Out More!").attr({"href" : "#"});
$(".fortempcardfooter2").append("<a></a>");
$(".fortempcardfooter2 a").addClass("btn btn-primary").text("Find Out More!").attr({"href" : "#"});
$(".fortempcardfooter3").append("<a></a>");
$(".fortempcardfooter3 a").addClass("btn btn-primary").text("Find Out More!").attr({"href" : "#"});
$(".fortempcardfooter4").append("<a></a>");
$(".fortempcardfooter4 a").addClass("btn btn-primary").text("Find Out More!").attr({"href" : "#"});

//Footer
$("footer").addClass("py-5 bg-dark");
$("footer").append("<div></div>")
$("footer div").addClass("container forfooter");
$(".forfooter").append("<p></p>");
$(".forfooter p").addClass("text-center text-white m-0").text("Copyright © Your Website 2019");

});