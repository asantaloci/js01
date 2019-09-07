//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/


paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

var tool2 = new Tool();
var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

tool2.onMouseDown = function(event) {
 var c = Shape.Circle(event.point, 20);
 c.fillColor = 'green';
};

paper.view.draw();


var date = new Date();
var day = date.getDay();
var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var timeString= date.toLocaleString([], { hour12: true, hour:'2-digit', minute:'2-digit', second:'2-digit'})




var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function answer1() {
  //document.getElementById("answer1").innerHTML="Today is Monday.";
  document.getElementById("answer1").innerHTML = "Today is " + days[date.getDay()] + ".<br/>" +"Current Time : " + timeString;
}

answer1();




function answer2() {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  document.getElementById("answer2").innerHTML = month + '-' + day + '-' + year + "<br/>" +
  month + '/' + day + '/' + year +"<br/>"+ day + '/' + month + '/' + year;
}
answer2();
