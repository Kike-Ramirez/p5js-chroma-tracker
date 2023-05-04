class Settings {
  constructor(jsondata, w, h) {
    this.jsondata = jsondata;
    this.enable = false;
    this.width = w;
    this.height = h;
    this.backgroundColorPicker = createColorPicker(jsondata.chromacolor);
    this.backgroundColorPicker.position(0.1 * this.width, 0.1 * this.height);
    this.backgroundColorPicker.size(0.1*this.width, AUTO);
    this.backgroundColorPicker.hide();
  }

  resize(w, h) {
    this.width = w;
    this.height = h;
  }

  setVisibility(enable) {
    this.enable = enable;
    if (enable) {
      this.backgroundColorPicker.show();
    }
    else {
      this.backgroundColorPicker.hide();
    }
  }

  render() {
    if (this.enable) {
      background(150);
    }
  }
}
