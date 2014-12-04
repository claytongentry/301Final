$(document).ready(function() {

    console.log("\n\nNEW TEST\n\n");

    var htmlForGraph = "<canvas id = 'crimeChart' width = '1350' height = '400'>";
    document.getElementById('room_for_chart').innerHTML += htmlForGraph;
    holder = document.getElementById('room_for_chart');
    holder.innerHTML += htmlForGraph;

    // From Chart.js documentation – graph labels, point customization and data
    var murderData = {
      labels : ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997",
      "1998", "1999", "2000", "2001", "2002", "2003", "2004",
      "2005", "2006", "2007", "2008", "2009", "2010", "2011",
      "2012", "2013", "2014"],

      // Murder counts per year
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

  // Make the chart
  var ctx = document.getElementById("crimeChart").getContext("2d");
  var crimeChart = new Chart(ctx).Line(murderData);

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
          eventDate.innerHTML = ("JUNE 6, 1990");
          eventTitle.innerHTML = ("EL RUKN GANG HQ DEMOLISHED");
          eventText.innerHTML = ("The City of Chicago tears down the notorious \"El Rukn\" gang's headquarters, colloquially known as \"The Fort,\" in the South Side's Oakland neighborhood.");
          break;
        // 1991
        case 145:
          eventDate.innerHTML = ("1991");
          eventTitle.innerHTML = ("DALEY WINS REELECTION IN LANDSLIDE");
          eventText.innerHTML = ("Incumbent Mayor Richard Daley wins another mayoral term over Eugene Pincham with 70.7 percent of the vote.");
          break;
        // 1992
        case 199:
          eventDate.innerHTML = ("1992");
          eventTitle.innerHTML = ("ASSAULT WEAPONS BANNED");
          eventText.innerHTML = ("The City of Chicago votes to ban assault weapons within city limits.");
          break;
        // 1993
        case 253:
          eventDate.innerHTML = ("MAY 1993");
          eventTitle.innerHTML = ("DEATH OF MARSHALL MORGAN, JR.");
          eventText.innerHTML = ("20-year-old Chicago resident Marshall Morgan, Jr., a point guard on the Illinois Institute of Technology's basketball team, is killed by multiple gunshot wounds. Tyrone Hood, 29, is convicted, though questions later arise about the legitimacy of his conviction.");
          break;
        // 1994
        case 307:
          eventDate.innerHTML = ("1994");
          eventTitle.innerHTML = ("RECORD NUMBER OF YOUNG PEOPLE KILLED");
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
          eventTitle.innerHTML = ("HOMICIDE COUNT DROPS BELOW 800");
          eventText.innerHTML = ("For the first time in the tumultuous '90s, Chicago's homicide count drops below 800, signaling a significant decline that will continue through the year 2000.");
          break;
        // 1997
        case 469:
          eventDate.innerHTML = ("1997");
          eventTitle.innerHTML = ("USSC RECOMMENDS FAIRER COCAINE SENTENCING TO NO AVAIL");
          eventText.innerHTML = ("The U.S. Sentencing Commission recommends raising the quantity of crack and lowering the quantity of powder cocaine required for a minimum sentence. Congress does nothing.");
          break;
        // 1998
        case 523:
          eventDate.innerHTML = ("1998");
          eventTitle.innerHTML = ("11-YEAR-OLD MOLESTED, MURDERED IN ENGLEWOOD");
          eventText.innerHTML = ("Two boys, ages 7 and 8, are charged with murdering Ryan Harris, 11. Those charges are dropped after semen stains belonging to 29-year-old Floyd Durr are discovered. Durr is sentenced to life plus 30 years in 2006.");
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
          eventTitle.innerHTML = ("CLINTON PARDONS ROSTENKOWSKI");
          eventText.innerHTML = ("President Clinton pardons Dan Rostenkowski, former U.S. congressman for Illinois and chairman of the House Ways and Means Committee, after he served 15 months in prison for mail fraud he committed in the early '90s.");
          break;
        // 2001
        case 685:
          eventDate.innerHTML = ("2001");
          eventTitle.innerHTML = ("MURDER COUNT RISES AGAIN");
          eventText.innerHTML = ("After a fairly steady decline from 1994 through 2000, Chicago's murder count rises again in 2001, from 633 in 2000 to 667 in 2001.");
          break;
        // 2002
        case 739:
          eventDate.innerHTML = ("NOV. 5, 2002");
          eventTitle.innerHTML = ("BLAGOJEVICH ELECTED GOVERNOR");
          eventText.innerHTML = ("Democratic Rep. Rod Blagojevich defeats Republican State Attorney General Jim Ryan in the 2002 Illinois gubernatorial election with 52 percent of the vote.");
          break;
        // 2003
        case 793:
          eventDate.innerHTML = ("JAN. 3, 2003");
          eventTitle.innerHTML = ("EMANUEL ASSUMES HOUSE SEAT");
          eventText.innerHTML = ("Rahm Emanuel takes seat as U.S. Representative for Illinois' Fifth District, formerly held by Rep. Rod Blagojevich, who would become governor 10 days later.");
          break;
        // 2004
        case 847:
          eventDate.innerHTML = ("2004");
          eventTitle.innerHTML = ("MURDER COUNT PLUMMETS");
          eventText.innerHTML = ("Chicago sees 148 fewer murders in 2004 than in the previous year, the most significant drop since 1982, which saw 668 murders, 209 fewer than the 1981 total of 887.");
          break;
        // 2005
        case 901:
          eventDate.innerHTML = ("FEB. 21, 2005");
          eventTitle.innerHTML = ("OFF-DUTY COP EXCHANGES SHOTS WITH CHICAGO PD");
          eventText.innerHTML = ("Off-duty Detective Howard Morgan, 53, exchanges gunfire with four Chicago police officers and is shot 28 times at the intersection of 19th and Lawndale. He'll be convicted of four counts of attempted murder in January 2012.");
          break;
        // 2006
        case 955:
          eventDate.innerHTML = ("APRIL 2006");
          eventTitle.innerHTML = ("MAYORS AGAINST ILLEGAL GUNS FOUNDED IN NYC");
          eventText.innerHTML = ("New York City mayor Michael Bloomberg and Boston mayor Thomas Menino co-found Mayors Against Illegal Guns, of which former Chicago mayor Richard Daley and current mayor Rahm Emanuel are members.");
          break;
        // 2007
        case 1009:
          eventDate.innerHTML = ("NOVEMBER 2007");
          eventTitle.innerHTML = ("UCHICAGO STUDENT SHOT, KILLED AT POINT-BLANK RANGE");
          eventText.innerHTML = ("29-year-old Amadou Cisse is shot and killed by Demetrius Warren at point-blank range a month before completing his Ph.D. in chemistry. Warren is convicted and sentenced to 120 years in 2011.");
          break;
        // 2008
        case 1063:
          eventDate.innerHTML = ("DEC. 18, 2008");
          eventTitle.innerHTML = ("JUDGE UPHOLDS CHICAGO'S 1982 HANDGUN BAN");
          eventText.innerHTML = ("U.S. District Judge Milton Shadur throws out lawsuits challenging Chicago's 1982 handgun ban, though the ban will be terminated in 2010.");
          break;
        // 2009
        case 1117:
          eventDate.innerHTML = ("JANUARY 2009");
          eventTitle.innerHTML = ("BLAGOJEVICH IMPEACHED, INDICTED");
          eventText.innerHTML = ("The Illinois General Assembly impeaches Gov. Rod Blagojevich and the Illinois Senate removes him from office in January. Blagojevich is indicted in April, and on June 27, 2011, found guilty of 17 corruption charges, then sentenced to 14 years in prison on Dec. 7, 2011.");
          break;
        // 2010
        case 1172:
          eventDate.innerHTML = ("2010");
          eventTitle.innerHTML = ("COURT STRIKES DOWN CHICAGO HANDGUN BAN");
          eventText.innerHTML = ("The U.S. Supreme Court decides 5-4 in McDonald v. City of Chicago that the second amendment applies to state and local gun-control laws, rendering the city's handgun ban unenforceable.");
          break;
        // 2011
        case 1226:
          eventDate.innerHTML = ("FEB. 22, 2011");
          eventTitle.innerHTML = ("RAHM EMANUEL ELECTED MAYOR");
          eventText.innerHTML = ("Rahm Emanuel becomes Chicago's 55th mayor, following Mayor Richard Daley's retirement after 22 years in office.");
          break;
        // 2012
        case 1280:
          eventDate.innerHTML = ("2012");
          eventTitle.innerHTML = ("CHICAGO HOMICIDE RATE OUTPACES U.S. KIA RATE IN AFGHANISTAN");
          eventText.innerHTML = ("516 people are killed in Chicago during 2012, 215 more than the 301 U.S. soldiers killed in Afghanistan over the same span of time.");
          break;
        // 2013
        case 1334:
          eventDate.innerHTML = ("JAN. 29, 2013");
          eventTitle.innerHTML = ("DEATH OF HADIYA PENDLETON");
          eventText.innerHTML = ("13-year-old Hadiya Pendleton is killed in a gang-related shooting in Harsh Park one week after having performed at President Obama's second inauguration ceremonies.");
          break;
      }
  }


});
