$(document).ready(function () {

    $(".newClassMates").html(`Add people here! \n Enter Key works too!`)
    document.getElementById("team").style.display = "inline-block";
    document.getElementById("teamButton").style.display = "inline-block";

    var students = [];

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
        $(".whoseInClass").html("Classmates:")
        console.log(choice)
        newKid.push(choice);
        students.splice(random, 1);
        console.log("This has been clicked");
        console.log(choice);

        document.getElementById("show").style.display = "inline-block";
        for (let i = 0; i < students.length; i++) {
            let liItem = $("<li>");
            liItem.html(students[i]);
            $(".inClass").append(liItem);

        }


        document.getElementById("start").style.display = "none";
        console.log(students);
        console.log(newKid);
        document.getElementById("team").style.display = "none";
        document.getElementById("teamButton").style.display = "none";
        $(".newClassMates").html("")
        localStorage.setItem(JSON.stringify("select",students));

    }


    $(".clack").on("click", textToPage);
    $(".redo").on("click", function () {

        $(".big").html("");
        $("#fade").html("");
        $(".big").removeClass("fade-in");
        $("#fade").removeClass("fade-in");
        $("#spot").html("Whose Screen Is It Anyway?...")
        $("#topdog").removeClass("jumbotron jumbotron-fluid blink-bg");
        $(".display-4").html("");
        $(".whoseInClass").html("");
        $(".newClassMates").html("")
        document.getElementById("start").style.display = "inline-block";
        document.getElementById("show").style.display = "none";
        $(".inClass").html("")
        $(".newClassMates").html("Add people here! \n Enter key works too!")
        document.getElementById("team").style.display = "inline-block";
        document.getElementById("teamButton").style.display = "inline-block";
    });



    $(".addTeam").on("click", function () {
        let teamMember = $("#team").val();
        students.push(teamMember);
        // let liItem = $("<li>");
        // let entry = liItem.html(teamMember);
        // $("#peeps").append(entry);
        $("#team").val("");
        


        console.log(teamMember)

    })

    $(document).on("keypress", function (e) {
        if (e.keyCode === 13) {
            let teamMember = $("#team").val();
            students.push(teamMember);
            // let liItem = $("<li>");
            // let entry = liItem.html(teamMember);
            // $("#peeps").append(entry);
            $("#team").val("");
        } else {
            console.log(e.keyCode);
        }


        console.log(teamMember)

    })


});