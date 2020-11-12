

function textToPage() {

    var students = ["Aaron", "Akash", "Anthony", "David B.",
        "David J.", "Hever", "Julia", "Julie", "Lohelani", "Maryam", "Richard", "Andrea"];

    var random = Math.floor(Math.random() * students.length);


    $(".big").html(students[random]);
    console.log("This has been clicked");

}


$("button").on("click", textToPage);




