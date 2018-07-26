function Button(x, y, w, h, id) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.id = id;
  this.visible = false;

  this.show = function() {
    if (! this.visible) {
      return;
    }
    push();
	strokeWeight(min(width, height) / 125);
    stroke(184, 134, 11, 255);
    if (mouseX > this.x && mouseX < this.x+this.w
    && mouseY > this.y && mouseY < this.y + this.h
    ){
      fill(255, 215, 0, 255);
      stroke(218, 165, 0, 255);
    } else {
      fill(218, 165, 0, 255);
	  stroke(184, 134, 11, 255);
    }

    rect(this.x, this.y, this.w, this.h, this.w / 8);
    textAlign(CENTER, CENTER);
    textSize(this.h / 1.5);
    fill(255);
    text(6 + 2 * this.id, this.x + this.w / 2, this.y + this.h / 2.5);
    pop();
  }

  this.checkPressed = function() {
    if (mouseX > this.x && mouseX < this.x+this.w
    && mouseY > this.y && mouseY < this.y + this.h
    ) {
      return true;
    }
    else return false;
  }

  this.action = function() {
    newGame(6 + 2 * this.id);
  }
}

function soundButton() {
  this.x = width / 30;
  this.y = height / 10;
  this.r = min(height, width) / 25;
  if (! localStorage.sound || localStorage.sound == 'on'){
    this.mode = 'on';
  } else {
    this.mode = 'off';
  }
  this.show = function() {

    if (this.mode == 'on') {
    image(soundOn, this.x - this.r, this.y - this.r,
      this.r * 2, this.r * 2);
  } else {
    image(soundOff, this.x - this.r, this.y - this.r,
      this.r * 2, this.r * 2);
  }

  }
  this.change = function() {
    if (this.mode == 'on') {
      this.mode = 'off';
      localStorage.sound = 'off';
    } else {
      this.mode = 'on';
      localStorage.sound = 'on';
    }

  }
}
