class Trackpoint {
  constructor(
    xpos,
    ypos,
    size,
    tpcolor,
    markertype,
    markercolor1,
    markercolor2
  ) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.tpcolor = tpcolor;
    this.selected = false;
    this.markertype = markertype;
    this.markercolor1 = markercolor1;
    this.markercolor2 = markercolor2;
  }

  setPosition(x, y) {
    this.xpos = x;
    this.ypos = y;
  }

  setSize(s) {
    this.size = s;
  }

  setColor(tpcolor) {
    this.tpcolor = tpcolor;
  }

  render() {
    if (this.selected) {
      stroke(255, 0, 0);
      strokeWeight(3);
    } else {
      noStroke();
    }

    if (this.markertype == 1) {
      fill(this.markercolor1);
      ellipse(this.xpos, this.ypos, this.size, this.size);
      fill(this.markerColor2);
      arc(this.xpos, this.ypos, this.size, this.size, 0, HALF_PI, PIE);
      arc(this.xpos, this.ypos, this.size, this.size, PI, PI + HALF_PI, PIE);
    } else if (this.markertype == 2) {
      stroke(this.markercolor1);
      strokeWeight(3);
      noFill();
      ellipse(this.xpos, this.ypos, this.size, this.size);
      line(
        this.xpos - 0.5 * this.size,
        this.ypos,
        this.xpos + 0.5 * this.size,
        this.ypos
      );
      line(
        this.xpos,
        this.ypos - 0.5 * this.size,
        this.xpos,
        this.ypos + 0.5 * this.size
      );
    } else if (this.markertype == 3) {
      stroke(this.markercolor1);
      strokeWeight(3);
      noFill();
      line(
        this.xpos - 0.5 * this.size,
        this.ypos,
        this.xpos + 0.5 * this.size,
        this.ypos
      );
      line(
        this.xpos,
        this.ypos - 0.5 * this.size,
        this.xpos,
        this.ypos + 0.5 * this.size
      );
    }
  }

  touchStarted(x, y) {
    dist = sqrt(
      (this.xpos - x) * (this.xpos - x) + (this.ypos - y) * (this.ypos - y)
    );
    if (dist < this.size) {
      this.selected = true;
    }
  }

  touchEnded() {
    if (this.selected) {
      this.selected = false;
    }
  }

  touchMoved(x, y) {
    if (this.selected) {
      this.xpos = x;
      this.ypos = y;
    }
  }
}
