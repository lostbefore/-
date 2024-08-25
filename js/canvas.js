function setup() {
    mX = mY = x = y = ax = ay = 0;
    spring = 0.08;
    friction = 0.8;
    createCanvas( 500, 500 );
    background( 255 );
  }
  
  function draw() {
    ax += ( mX - x ) * spring;
    ay += ( mY - y ) * spring;
    ax *= friction;
    ay *= friction;
    
    oldX = x;
    oldY = y;
    x += ax;
    y += ay;
    strokeWeight( abs( ax + ay ) / 3 + 1 );
    line( x, y, oldX, oldY );
  }
  
  function mousePressed() {
    mX = x = mouseX;
    mY = y = mouseY;
  }
  
  function mouseDragged() {
    mX = mouseX;
    mY = mouseY;
  }