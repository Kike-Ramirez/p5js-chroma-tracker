class Settings {
  constructor(jsondata, w, h) {
    this.jsondata = jsondata;
    this.enable = false;
    this.width = w;
    this.height = h;

    this.settingsNameTitle = createElement("h2", "JSON Settings name");
    this.settingsNameTitle.position(0.1 * this.width, 0.03 * this.height);
    this.settingsNameTitle.hide();
    
    this.settingsNameInput = createInput(jsondata.name, "text");
    this.settingsNameInput.position(0.1 * this.width, 0.1 * this.height);
    this.settingsNameInput.hide();

    this.backgroundColorTitle = createElement("h2", "Background Color");
    this.backgroundColorTitle.position(0.1 * this.width, 0.15 * this.height);
    this.backgroundColorTitle.hide();

    this.backgroundColorPicker = createColorPicker(jsondata.chromacolor);
    this.backgroundColorPicker.position(
      this.backgroundColorTitle.x, //+ this.backgroundColorTitle.width,
      0.22 * this.height
    );
    this.backgroundColorPicker.size(0.08 * this.width, 0.05 * this.height);
    this.backgroundColorPicker.hide();

    this.backgroundColorInput = createInput(jsondata.chromacolor, "text");
    this.backgroundColorInput.position(0.1 * this.width + this.backgroundColorPicker.width, 0.22 * this.height);
    this.backgroundColorInput.size(AUTO,  0.05 * this.height)
    this.backgroundColorInput.hide();

  }

  resize(w, h) {
    this.width = w;
    this.height = h;
  }

  setVisibility(enable) {
    this.enable = enable;
    if (enable) {
      this.backgroundColorInput.show();
      this.backgroundColorTitle.show();
      this.backgroundColorPicker.show();
      this.settingsNameInput.show();
      this.settingsNameTitle.show();
    } else {
      this.backgroundColorInput.hide();
      this.backgroundColorTitle.hide();
      this.backgroundColorPicker.hide();
      this.settingsNameInput.hide();
      this.settingsNameTitle.hide();
    }
  }

  render() {
    if (this.enable) {
      background(150);
    }
  }
}
