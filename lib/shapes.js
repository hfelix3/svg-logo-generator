//TODO: create a shape constructor class as parent class
//PARENT CLASS
    class Shape {
        constructor(color, text, textColor) {
            this.color = color;
            this.text = text;
            this.textColor = textColor;
        }
        
    };
    
//TODO:create a child class for each shape that inherits from Shape class
//CHILD CLASS
      class Circle extends Shape {
      render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`


      }};

      class Triangle extends Shape {
      render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polyline points="0,100 50,0 ,100 100" fill="${this.color}"/><text x="50" y="90" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
      }};

      class Square extends Shape {
      render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="${this.color}"/><text x="50" y="60" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
      }};

//TODO:use export to index.js and shapes.test.js
    module.exports = {Circle,Triangle,Square}