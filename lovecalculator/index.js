function loveCalculator()
{
  var lovescore = Math.random();
  lovescore = Math.round(lovescore*100);
  if(lovescore >= 70){

    document.getElementById("demo").innerHTML ="Your lovescore ❤️ is " +lovescore+ " %, true love 😍";
  }
  if(lovescore < 70 && lovescore>30){
    document.getElementById("demo").innerHTML ="Your lovescore ❤️ is " +lovescore+ " %😊.";
  }
  if(lovescore<=30){
    
    document.getElementById("demo").innerHTML ="Your lovescore is " +lovescore+ " %, you both like oil and water 😭.";
  }

}
