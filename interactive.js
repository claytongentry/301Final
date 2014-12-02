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
            pointStrokeColor : "#aaa",

            data : [851, 927, 943, 855, 931, 828, 796, 761, 704, 643, 633,
            667, 656, 601, 453, 451, 471, 448, 513, 459, 436,
            435, 516, 415, 408],
          }
      ]
  }

  var ctx = document.getElementById("crimeChart").getContext("2d");
  var crimeChart = new Chart(ctx).Line(murderData);

  // Turns cursor into a pointer on label:hover
  /*$(murderData.datasets.data).on('mouseover', function() {
    $(this).css("cursor", "pointer");
  });*/

  holder.onclick = function(evt){

      var activePoints = crimeChart.getPointsAtEvent(evt);
      // => activePoints is an array of points on the canvas that are at the same position as the click event.
      console.log(activePoints[0].x);

      var eventBox = document.getElementById("event_box");
      var eventTitle = document.getElementById("event_title");
      var eventText = document.getElementById("event_text");
      var eventDate = document.getElementById("event_date");
      var eventImage = document.getElementById("event_image");

      switch(activePoints[0].x) {
        // 1990
        case 91:
          eventDate.innerHTML = ("1990");
          break;
        // 1991
        case 145:
          eventDate.innerHTML = ("1991");
          eventTitle.innerHTML = ("ASSAULT WEAPONS BANNED");
          eventText.innerHTML = ("The City of Chicago voted to ban assault weapons within city limits.");
          break;
        // 1992
        case 199:
          eventDate.innerHTML = ("1992");
          break;
        // 1993
        case 253:
          eventDate.innerHTML = ("1993");
          break;
        // 1994
        case 307:
          eventDate.innerHTML = ("1994");
          eventTitle.innerHTML = ("RECORD NUMBER OF YOUNG PEOPLE KILLED.");
          eventText.innerHTML = ("278 people ages 11-20 were killed in Chicago, 33 more than the previous record of 245 in 1993.");
          break;
        // 1995
        case 361:
          eventDate.innerHTML = ("1995");
          eventTitle.innerHTML = ("HUD TAKES OVER CHA");
          eventText.innerHTML = ("The Department of Housing and Urban Development takes over the Chicago Housing Authority with plans to demolish several housing projects, including Cabrini-Green.");
          break;
        // 1996
        case 415:
          eventDate.innerHTML = ("1996");
          break;
        // 1997
        case 469:
          eventDate.innerHTML = ("1997");
          break;
        // 1998
        case 523:
          eventDate.innerHTML = ("1998");
          break;
        // 1999
        case 577:
          eventDate.innerHTML = ("1999");
          eventTitle.innerHTML = ("CITY OF CHICAGO V. MORALES RULING");
          eventText.innerHTML = ("The U.S. Supreme Court affirms in City of Chicago v. Morales that Chicago's Gang Congregation Ordinance is unconstitutionally vague and leaves “too much discretion to the police.\"");
          break;
        // 2000
        case 631:
          eventDate.innerHTML = ("2000");
          break;
        // 2001
        case 685:
          eventDate.innerHTML = ("2001");
          break;
        // 2002
        case 739:
          eventDate.innerHTML = ("2002");
          break;
        // 2003
        case 793:
          eventDate.innerHTML = ("2003");
          break;
        // 2004
        case 847:
          eventDate.innerHTML = ("2004");
          break;
        // 2005
        case 901:
          eventDate.innerHTML = ("2005");
          break;
        // 2006
        case 955:
          eventDate.innerHTML = ("2006");
          break;
        // 2007
        case 1009:
          eventDate.innerHTML = ("2007");
          break;
        // 2008
        case 1063:
          eventDate.innerHTML = ("2008");
          break;
        // 2009
        case 1117:
          eventDate.innerHTML = ("2009");
          break;
        // 2010
        case 1172:
          eventDate.innerHTML = ("2010");
          eventTitle.innerHTML = ("COURT STRIKES DOWN CHICAGO HANDGUN BAN");
          eventText.innerHTML = ("The U.S. Supreme Court decides 5-4 in McDonald v. City of Chicago that the second amendment applies to state and local gun-control laws, rendering the city's ban on handguns largely unenforceable.");
          break;
        // 2011
        case 1226:
          eventDate.innerHTML = ("2011");
          eventTitle.innerHTML = ("RAHM EMANUEL ELECTED MAYOR");
          eventText.innerHTML = ("Rahm Emanuel becomes Chicago's 55th mayor, following Mayor Richard Daley's retirement after 22 years in office.");
          break;
        // 2012
        case 1280:
          eventDate.innerHTML = ("2012");
          break;
        // 2013
        case 1334:
          eventDate.innerHTML = ("JAN. 29, 2013");
          eventTitle.innerHTML = ("DEATH OF HADIYA PENDLETON");
          eventText.innerHTML = ("13-year-old Hadiya Pendleton was killed in a gang-related shooting in Harsh Park one week after having performed at President Obama's second inauguration ceremonies.");
          break;
      }
  }


});
