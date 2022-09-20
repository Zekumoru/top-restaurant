export default class {
  constructor(src, alt, width, top, left) {
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.top = top;
    this.left = left;
  }

  getStyleObject() {
    return {
      width: this.width,
      top: this.top,
      left: this.left,
    }
  }
}