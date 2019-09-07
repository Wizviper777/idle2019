import './style.css';

$(document).ready(function(){
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

  $("#roombtn").click(function(){
  changeScene('room');
  });
  $("#tunnelbtn").click(function(){
  changeScene('tunnel');
  });
});



