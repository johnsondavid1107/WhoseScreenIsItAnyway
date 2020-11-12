$(document).ready(function () {
   
    var students = ["Aaron", "Akash", "Anthony", "David B.",
    "David J.", "Hever", "Julia", "Julie", "Lohelani", "Maryam", "Richard", "Andrea"];
    

    var newKid = [];
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


        console.log("This has been clicked");
        console.log(students[random]);

        $(".showButton").html("<button>Show The Blessed</button>");
        document.getElementById("show").style.display = "inline-block";
        const selection = students.filter(
            (item) => {
                return item !== students[random];
            }
        )
        // students.splice(students[random],1);


        console.log(students);
        console.log(selection);
       
       


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
    });






});
