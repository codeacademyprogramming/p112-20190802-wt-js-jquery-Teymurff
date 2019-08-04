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
$(".forcards div").addClass("row text-center");


});