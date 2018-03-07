//Issues:
//1. Regular mode: if I make a mistake, allow me to try again


$(document).ready(function() {
  /////VARIABLES, galore!
  //sounds
  var verde = $("#verde")[0];
  var rojo = $("#rojo")[0];
  var amarillo = $("#amarillo")[0];
  var azul = $("#azul")[0];  
  const RED = "red";
  const BLUE = "blue";
  const YELLOW = "yellow";
  const GREEN = "green";
  var round = 0; //track # of rounds
  var a = document.getElementById("count"); //count display
  var on = false; //for On/Off slider
  var strictOn = false; //for strict button
  var sequence = []; //track Simon sequence
  var step = 0;
  var colors = [GREEN, RED, YELLOW, BLUE];
  test = 0;

  
  /////FUNCTIONS, galore!
  //make the buttons darken and play corresponding sound on SIMON's turn
   function flash(spot) {
     //sounds
     if(spot === "green"){
       verde.load(); //use .load so sound will play in each round, not just once
       verde.play();
     } else if(spot === "red"){
       rojo.load();
       rojo.play();
     }else if(spot === "yellow"){
       amarillo.load();
       amarillo.play();
     }else if(spot === "azul"){
       azul.load();
       azul.play();
     }
     //make buttons darken for 1.5 seconds
     $("." + spot).css("transition", "1s").css("filter", "brightness(20%)");
     setTimeout(function(){ 
       $("." + spot).css("filter", "brightness(100%)"); 
     }, 1500);
  }
  
  //Add to Simon's sequence and make those buttons "flash"
  function nextSequence(){
    var nextColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(nextColor);
    console.log("the sequence is...", sequence);
    var i = 0;
    //make buttons darken in order. buttons wait 2 seconds to darken
    var myInterval = setInterval(function(){ 
      id = sequence[i];
      flash(sequence[i]);
      i++;
    }, 2000);
   }

//Game logic
   function sendColor(color){
     //if the array is empty, start a new game
     if(!sequence.length){
       nextSequence();
     //Otherwise...
     }else{
       //if the user is correct
       if(color === sequence[step]){
         //Check if the user won (20 correct) and restart game
         if(step === sequence.length-1 && sequence.length ===20){
           alert("Congratulations! You won!");
           sequence = [];
           a.value = 1;
           nextSequence();
           step = 0;
         //if the user has not reached 20
         } else if(step === sequence.length-1){
           console.log("sequence complete!");
           a.value ++;
           step = 0;
           nextSequence();
         } else{
           step++;
         }
       //if the user is NOT correct
       }else{
         //STRICT mode, start over
         if (strictOn ===true){
           alert("wrong!");
           sequence = [];
           step = 0;
           nextSequence();
         //REGULAR mode, play last sequence again.
           //NEEDS ATTENTION!!!!!
           //1. how to let user try again? keep getting infinite loop
         }else{
           alert("incorrecto!");
           var i = 0;
           var myInterval = setInterval(function(){ 
             id = sequence[i];
             flash(sequence[i]);
             i++;
           }, 2000);
         }
       } 
     }
   }
  
  //make buttons darker while user is clicking
  function press(){
      $(".pad").mousedown(function(){
        $(this).css("filter", "brightness(20%)");  
        $(".pad").mouseup(function(){
          $(this).css("transition", "1s").css("filter", "brightness(100%)");
        });  
      });
    }
  
/////CLICK EVENTS, galore! (So much galore!!)
  //turn on the game - slider
  $(".slider").click(function(){
    if (on === false){
    console.log("Simon Game ON!!");
      on = true;
  
  //strict mode - yellow button
  $("#strict").click(function(){
    if (strictOn === false){
      alert("Strict is on! Good luck!");
      strictOn = true;
    } else{
      alert("Strict is already on, goofball!");
    } 
    }); 
      
  //starting the game - red button
  $("#start").click(function(){
    sequence = [];
    nextSequence();
    a.value = 1;
  
      
  //When the user clicks...
  $("#0").click(function(){
    verde.load();
    verde.play();
    sendColor(GREEN);
    press();   
  });
  $("#1").click(function(){
    rojo.load();
    rojo.play();
    sendColor(RED);
    press(); 
  });
  $("#2").click(function(){
    amarillo.load();
    amarillo.play();
    sendColor(YELLOW);
    press();
  });
  $("#3").click(function(){
    azul.load();
    azul.play();
    sendColor(BLUE);
    press();
  });
 }); 
    
//turn off the game
  }else{
      on = false;
      console.log("Simon Game Off!");
      $('.pad').click(function(){
        console.log("Simon game is off.")
      });
    }
  });
})

