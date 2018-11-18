//-- 

var box1=Math.floor((Math.random() * 10) + 1);
var box2=Math.floor((Math.random() * 10) + 1);
var box3=Math.floor((Math.random() * 10) + 1);
var box4=Math.floor((Math.random() * 10) + 1);
var target=Math.floor((Math.random() * 120) + 1);
var currentScore= 0;

$(".btn").on("click", function() {
    console.log(this)
})


$(document).ready(function() {
    console.log("ready");
    $("#target").text(target);
    $("#1").attr("val", box1);
    $("#2").attr("val", box2);
    $("#3").attr("val", box3);
    $("#4").attr("val", box4);
    $(".btn").on("click", function() {
        
        y=$(this).attr("val");
        
        currentScore+=parseInt(y);
        console.log(currentScore);

        if (currentScore === target) {
            var box1=Math.floor((Math.random() * 10) + 1);
            var box2=Math.floor((Math.random() * 10) + 1);
            var box3=Math.floor((Math.random() * 10) + 1);
            var box4=Math.floor((Math.random() * 10) + 1);
            var target=Math.floor((Math.random() * 120) + 1);
            var currentScore= 0;
            wins ++;
        }

        else if (currentScore > target) {
            var box1=Math.floor((Math.random() * 10) + 1);
            var box2=Math.floor((Math.random() * 10) + 1);
            var box3=Math.floor((Math.random() * 10) + 1);
            var box4=Math.floor((Math.random() * 10) + 1);
            var target=Math.floor((Math.random() * 120) + 1);
            var currentScore= 0;
            loses ++;
        }
    })
    
})

