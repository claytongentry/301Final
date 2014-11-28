$(document).ready(function() {

    console.log("\n\nNEW TEST\n\n");

    var htmlForGraph = "<canvas id = 'crimeChart' width = '1350' height = '400'>";
    document.getElementById('room_for_chart').innerHTML += htmlForGraph;
    holder = document.getElementById('room_for_chart');
    holder.innerHTML += htmlForGraph;


    var murderData = {
      labels : ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997",
      "1998", "1999", "2000", "2001", "2002", "2003", "2004",
      "2005", "2006", "2007", "2008", "2009", "2010", "2011",
      "2012", "2013", "2014"],

      // Murder
      datasets : [
          {
            fillColor : "rgba(255,0,0,0.6)",
            strokeColor : "#36c",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",

            data : [851, 927, 943, 855, 931, 828, 796, 761, 704, 643, 633,
            667, 656, 601, 453, 451, 471, 448, 513, 459, 436,
            435, 516, 415, 408],
          }
      ]
  }

  var ctx = document.getElementById("crimeChart").getContext("2d");
  var crimeChart = new Chart(ctx).Line(murderData);

  holder.onclick = function(evt){
      var activePoints = crimeChart.getPointsAtEvent(evt);
      // => activePoints is an array of points on the canvas that are at the same position as the click event.
      console.log(activePoints[0].x);
      var eventBox = document.getElementById("event_box");
      switch(activePoints[0].x) {
        case 91:
          eventBox.querySelector("p").innerHTML = ("1990");
          break;
        case 145:
          eventBox.querySelector("p").innerHTML = ("1991");
          break;
        case 199:
          eventBox.querySelector("p").innerHTML = ("1992");
          break;
        case 253:
          eventBox.querySelector("p").innerHTML = ("1993");
          break;
        case 307:
          eventBox.querySelector("p").innerHTML = ("1994");
          break;
        case 361:
          eventBox.querySelector("p").innerHTML = ("1995");
          break;
        case 415:
          eventBox.querySelector("p").innerHTML = ("1996");
          break;
        case 469:
          eventBox.querySelector("p").innerHTML = ("1997");
          break;
        case 523:
          eventBox.querySelector("p").innerHTML = ("1998");
          break;
        case 577:
          eventBox.querySelector("p").innerHTML = ("1999");
          break;
        case 631:
          eventBox.querySelector("p").innerHTML = ("2000");
          break;
        case 685:
          eventBox.querySelector("p").innerHTML = ("2001");
          break;
        case 739:
          eventBox.querySelector("p").innerHTML = ("2002");
          break;
        case 793:
          eventBox.querySelector("p").innerHTML = ("2003");
          break;
        case 847:
          eventBox.querySelector("p").innerHTML = ("2004");
          break;
        case 901:
          eventBox.querySelector("p").innerHTML = ("2005");
          break;
        case 955:
          eventBox.querySelector("p").innerHTML = ("2006");
          break;
        case 1009:
          eventBox.querySelector("p").innerHTML = ("2007");
          break;
        case 1063:
          eventBox.querySelector("p").innerHTML = ("2008");
          break;
        case 1117:
          eventBox.querySelector("p").innerHTML = ("2009");
          break;
        case 1172:
          eventBox.querySelector("p").innerHTML = ("2010");
          break;
        case 1226:
          eventBox.querySelector("p").innerHTML = ("2011");
          break;
        case 1280:
          eventBox.querySelector("p").innerHTML = ("2012");
          break;
        case 1334:
          eventBox.querySelector("p").innerHTML = ("2013");
          break;
      }
  }


});
