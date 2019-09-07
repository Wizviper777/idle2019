import './style.css';

$(document).ready(function(){
  var player = {
    stone:10000,
    drillPrice:10,
    digTime:200,
    digcheck:false
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
    var digWidth = 0;
    player.digcheck = true;
    var digFrame = setInterval(digging, 10);
    function digging() {
    if(digWidth >= player.digTime) {
      clearInterval(digFrame);
      digWidth = 0;
      $("#digBar").width(0 + "%");
      player.stone++;
      $("#stonetext").html("Stone: " + player.stone);
      player.digcheck = false;
    }
    else {
      digWidth++;
      $("#digBar").width((digWidth / player.digTime * 100) + "%");
    }
  }
  }

  function buyRoom(item) {
    if(item == 'drill')
    {
      if(player.stone >= player.drillPrice) {
        player.stone -= player.drillPrice;
        player.drillPrice = Math.ceil(player.drillPrice * 1.3);
        player.digTime *= 0.9;
      }
    }
  }

  $("#roombtn").click(function(){
  changeScene('room');
  });
  $("#tunnelbtn").click(function(){
  changeScene('tunnel');
  });
  $("#digButton").click(function() {
    if(player.digcheck == false) {
      startDig();
    }
  });
    $("#drillButton").click(function(){
  buyRoom('drill');
  });













});



