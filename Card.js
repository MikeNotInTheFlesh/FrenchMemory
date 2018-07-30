
function Card(x, y, cardWidth, id, song = false) {
  this.x = x;
  this.y = y;
  this.w = cardWidth;
  this.h = this.w * 3/4;
  this.visible = false;
  this.id = id;
  this.song = song;

  this.show = function() {
    if (this.visible) {
	  push();
      fill(255, 255, 255, 255);
      stroke(220);
      strokeWeight(this.w / 30);
	  if (this.song) {
		  rect(this.x, this.y, this.w, this.h, this.w / 30);
		  image(musicImage, this.x, this.y, this.w, this.h);
	  } else {
		image(pics[this.id], this.x - this.w * 0.1, this.y - this.h * 0.1, this.w * 1.2, this.h * 1.2);
		noFill();
		rect(this.x - this.w * 0.1, this.y - this.h * 0.1, this.w * 1.2, this.h * 1.2, this.w / 30);
	  }
    } else {
      fill(0, 100, 255, 255);
      // rect(this.x, this.y, this.w, this.h, this.w / 30);
	  if (this.song) {
		image(backRed, this.x, this.y, this.w, this.h);
		image(musicNote, this.x, this.y, this.w, this.h);
	  } else {
		  image(backBlue, this.x, this.y, this.w, this.h);
	  }
    }
	pop();
  }
}
