import './style.css';

$(document).ready(function(){
  var player = {
    stone:0


  }
  $("#tunneltab").hide();

  function changeScene(scene) {
    if(scene == 'room') {
    $("#roomtab").show();
    $("#tunneltab").hide();
    }
    if(scene == 'tunnel') {
    $("#roomtab").hide();
    $("#tunneltab").show();
    }
  } 

  function startDig() {
    var digWidth = 1;
    var digFrame = setInterval(digging, 10);
    function digging() {
    if(digWidth >= 100) {
      clearInterval(digFrame);
      $("#digBar").width(0 + "%");
      player.stone++;
    }
    else {
      digWidth++;
      $("#digBar").css("width", digWidth + "%");
    }
  }
  }

  $("#roombtn").click(function(){
  changeScene('room');
  });
  $("#tunnelbtn").click(function(){
  changeScene('tunnel');
  });
  $("#digButton").click(startDig);













});



