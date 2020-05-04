$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');


  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);


    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {


      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });


      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();



//autoscroll//
var speed=1
var downspeed= 1
var stopspeed= 0
var currentpos=0
var alt = 0
var curpos1 = 100
var curpos2 = 1
var timeoutid = null
function initialize(){
startit()
}
function goup(e) {
speed = stopspeed
}
function godown(e) {
speed = downspeed
}
function scrollwindow(){
if (document.all) {
 temp=document.body.scrollDown;
}
else {
 temp=window.pageYOffset;
}
if (alt==0) {
 alt=1;
 curpos2 = temp;
}
else {
 alt=0;
 curpos1 = temp;
}
if ((curpos1==curpos2) && (speed > 0)) {
 currentpos = 0;
 curpos1 = 100;
}
else {
 if (document.all) {
  currentpos=document.body.scrollDown+speed;
 }
 else {
 currentpos=window.pageYOffset+speed;
 }
}
if (speed > 0) { window.scrollTo(0,currentpos); }
timeoutid = setTimeout("scrollwindow()", 20);
}
function startit(){
timeoutid = setTimeout("scrollwindow()", 20)
}
window.onload= initialize
document.onmousedown = goup;
document.ondblclick = godown;

function stopscroll() {
  clearTimeout(timeoutid)
}
