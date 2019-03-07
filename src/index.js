
import './sass/input.scss';
import $ from "jquery";

$(document).ready(function(){


$(".button").click(function(){
    $(".back").show();
    $(".ingredient1").addClass("fiveID1");
    $(".ingredient2").addClass("fiveID2");
    $(".ingredient3").addClass("fiveID3");
    $(".ingredient4").addClass("fiveID4");
    $(".ingredient5").addClass("fiveID5");
    $(".drink2W").addClass("blowUps");
    $(".drink3W").addClass("blowUps");
    $(".drink4W").addClass("blowUps");
  })
$(".buttonMan").click(function(){
    $(".back").show();
    $(".man-1").addClass("threeID1");
    $(".man-2").addClass("threeID2");
    $(".man-3").addClass("threeID3");
    $(".drink1W").addClass("blowUps");
    $(".drink2W").addClass("blowUps");
    $(".drink4W").addClass("blowUps");
  })
$(".buttonSou").click(function(){
    $(".back").show();
    $(".w-s1").addClass("threeID1");
    $(".w-s2").addClass("threeID2");
    $(".w-s3").addClass("threeID3");
    $(".drink1W").addClass("blowUps");
    $(".drink3W").addClass("blowUps");
    $(".drink4W").addClass("blowUps");
  })
$(".buttonJ").click(function(){
    $(".back").show();
    $(".m-j1").addClass("fiveID1");
    $(".m-j2").addClass("fiveID2");
    $(".m-j3").addClass("fiveID3");
    $(".m-j4").addClass("fiveID4");
    $(".m-j5").addClass("fiveID5");
    $(".drink2W").addClass("blowUps");
    $(".drink3W").addClass("blowUps");
    $(".drink1W").addClass("blowUps");
  })

});
