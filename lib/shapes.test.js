//TODO: insert the required file where shapes where constructed.
const {Circle, Triangle, Square} = require('./shapes');

//TODO: start test with description of what it should do for each shape
describe('testing out shapes', () => {
    describe('circle render', () => {
        it('should make a circle with specific color, text and textcolor', () => {
            const mockCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="BLUE"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="BLACK">GGG</text>
        </svg>`
            const realCircle = new Circle('BLUE', 'GGG', 'BLACK');
            expect(realCircle.render()).toEqual(mockCircle)
        });
    });

    describe('triangle render', () => {
        it('should make a triangle with specific color, text and textcolor', () => {
            const mockTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polyline points="0,100 50,0 ,100 100" fill="GREEN"/><text x="50" y="90" font-size="30" text-anchor="middle" fill="WHITE">TTT</text></svg>`
            const realTriangle = new Triangle('GREEN', 'TTT', 'WHITE');
            expect(realTriangle.render()).toEqual(mockTriangle)
        });
    });

    describe('square render', () => {
        it('should make a square with specific color, text and textcolor', () => {
            const mockSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="RED"/><text x="50" y="60" font-size="40" text-anchor="middle" fill="BLACK">SSS</text></svg>`
            const realSquare = new Square('RED', 'SSS', 'BLACK');
            expect(realSquare.render()).toEqual(mockSquare)
        });
    });
});