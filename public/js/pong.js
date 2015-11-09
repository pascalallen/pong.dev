$(document).ready(function() {
    "use strict";
    $(document).on('mousemove', function(e){
        $('#rightBar').css({
           left:  e.pageX,
           top:   e.pageY
        });
    });

	$("#start").click(function() {
        animateDiv();       
    });
    function makeNewPosition(){
        var h = $(window).height() - 50;        
        var nh = Math.floor(Math.random() * h);        
        return [nh];       
    }
    function animateDiv(){
        var newq = makeNewPosition();
        var oldq = $('#leftBar').offset();
        var speed = calcSpeed([oldq.top], newq);
        $('#leftBar').animate({ top: newq[0]}, speed, function(){
            animateDiv();        
        });
    };
    function calcSpeed(prev, next) {
        var y = Math.abs(prev[0] - next[0]);        
        var greatest = y;        
        var speedModifier = 0.1;
        var speed = Math.ceil(greatest/speedModifier);
        return speed;
    }
});