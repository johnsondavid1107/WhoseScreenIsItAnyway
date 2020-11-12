$(document).ready(function () {

    

    function textToPage() {

        var students = ["Aaron", "Akash", "Anthony", "David B.",
            "David J.", "Hever", "Julia", "Julie", "Lohelani", "Maryam", "Richard", "Andrea"];

        var random = Math.floor(Math.random() * students.length);


        $(".big").html(students[random]);
        $("#spot").html("");
        $("#fade").addClass("fade-in");
        $("#fade").html("You get to share!");
        $(".big").addClass("fade-in");
        $("#topdog").addClass("jumbotron jumbotron-fluid blink-bg");
        $(".display-4").html("CONGRATULATONS!!")


        console.log("This has been clicked");
        console.log(students[random]);

    }


    $(".clack").on("click", textToPage);
    $(".redo").on("click", function () {

        $(".big").html("");
        $("#fade").html("");
        $(".big").removeClass("fade-in");
        $("#fade").removeClass("fade-in");
        $("#spot").html("Whose Screen Is It Anyway?...")
        $("#topdog").removeClass("jumbotron jumbotron-fluid blink-bg");
        $(".display-4").html("")
    });


   



});
