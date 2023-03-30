document.addEventListener("DOMContentLoaded", function(){
    var circle = document.getElementById('circle');
    var diamond = document.getElementById('diamond');
    var greenRectangle = document.getElementById('green-rectangle');
    var congrats = document.getElementById('congrats');
    
    var diamondRect = diamond.getBoundingClientRect();
    var greenRectRect = greenRectangle.getBoundingClientRect();
    
    var isDragging = false;
    
    circle.addEventListener('touchstart', function() {
      isDragging = true;
    });
    
    circle.addEventListener('touchmove', function(event) {
      if (isDragging) {
        event.preventDefault();
        var touch = event.touches[0];
        var circleRect = circle.getBoundingClientRect();
        var x = touch.pageX;
        var y = touch.pageY;
        
        if (x > diamondRect.left && x < diamondRect.right && y > diamondRect.top && y < diamondRect.bottom) {
          circle.style.top = (y - circleRect.height/2) + 'px';
          circle.style.left = (x - circleRect.width/2) + 'px';
        }
      }
    });
    
    circle.addEventListener('touchend', function() {
      isDragging = false;
      var circleRect = circle.getBoundingClientRect();
      var greenRectTop = greenRectRect.top;
      var greenRectBottom = greenRectRect.bottom;
      var greenRectLeft = greenRectRect.left;
      var greenRectRight = greenRectRect.right;
      
      //confirm it entered
      if (circleRect.top > greenRectTop && circleRect.bottom < greenRectBottom && circleRect.left > greenRectLeft && circleRect.right < greenRectRight) {
        greenRectangle.style.backgroundColor = 'purple';
        greenRectangle.style.transform = 'translate(-50%, -50%) rotateX(180deg) rotateY(180deg) rotateZ(180deg)'
        congrats.textContent = "Congrats!"
        congrats.style.display = "block"
      }
    })
})