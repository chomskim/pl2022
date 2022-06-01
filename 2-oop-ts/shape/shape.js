var Circle = /** @class */ (function () {
    function Circle(r) {
        this.radius = r;
    }
    Circle.prototype.toString = function () {
        return "Circle Radius=".concat(this.radius);
    };
    Circle.prototype.computeArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.height = h;
        this.width = w;
    }
    Rectangle.prototype.toString = function () {
        return "Rectangle Width=".concat(this.width, ", Height=").concat(this.height);
    };
    Rectangle.prototype.computeArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
function totalAreas(shapes) {
    var total = 0.0;
    for (var i = 0; i < shapes.length; ++i) {
        var s = shapes[i];
        console.log("".concat(s.toString(), " -- area=").concat(s.computeArea()));
        total += s.computeArea();
    }
    return total;
}
var allShapes = [];
allShapes.push(new Rectangle(2, 3));
allShapes.push(new Circle(5));
allShapes.push(new Rectangle(5.0, 5.0));
allShapes.push(new Circle(8.0));
allShapes.push(new Rectangle(9, 9));
allShapes.push(new Circle(0));
allShapes.push(new Rectangle(0, 0));
console.log("allShapes = ".concat(JSON.stringify(allShapes)));
var tot = totalAreas(allShapes);
console.log("Total Area = ".concat(tot));
