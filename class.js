$(document).ready(function () {

    var students = ["Aaron", "Akash", "Anthony", "David B.",
        "David J.", "Hever", "Julia", "Julie", "Lohelani", "Maryam", "Richard", "Andrea"];


    
    function textToPage() {

        var random = Math.floor(Math.random() * students.length);

        let choice = students[random];

        $(".big").html(choice);
        $("#spot").html("");
        $("#fade").addClass("fade-in");
        $("#fade").html("You get to share!");
        $(".big").addClass("fade-in");
        $("#topdog").addClass("jumbotron jumbotron-fluid blink-bg");
        $(".display-4").html("CONGRATULATIONS!!")
        console.log(choice)
        students.splice(random, 1);
        console.log("This has been clicked");
        console.log(choice);

        document.getElementById("show").style.display = "inline-block";
        for (let i = 0; i < students.length; i++){
            let liItem = $("<li>");
            liItem.html(students[i]);
            $(".inClass").append(liItem);

        }
        
        


        console.log(students);
        




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
        document.getElementById("start").style.display = "inline-block";
        document.getElementById("show").style.display = "none";
        $(".inClass").html("")
    });






});