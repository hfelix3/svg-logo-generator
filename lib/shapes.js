//TODO: create a shape constructor class as parent class
//PARENT CLASS
    class shape {
        constructor(color, text, textColor) {
            this.color = color;
            this.text = text;
            this.textColor = textColor;
        }
//?do I need this render here?
        
    };
    
//TODO:create a child class for each shape that inherits from Shape class
//CHILD CLASS
//?add a child class for text and text color?
      class circle extends shape {
        constructor() {
            this.fill = fill;
        };
      render() {
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="${this.fill}"/></svg>`
      }};

      class triangle extends shape {
      render() {
        return `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><polyline points="0,100 50,0 ,100 100" /></svg>`
      }};

      class square extends shape {
      render() {
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" /></svg>`
      }};

//TODO:use export
    module.exports = {shape,circle,triangle,square}

    // example of literals used for fill and textinput
    // <text x="150"y="125"font-size="60"text-anchor="middle"fill="white">SVG<text>
      