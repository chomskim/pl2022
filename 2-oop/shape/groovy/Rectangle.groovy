
class Rectangle implements Shape {

	double height = 0;
	double width = 0;
	
	public Rectangle() {
		super();
		height = 5; // default value
		width = 10;
	}
	public Rectangle(w, h) {
		height = h; // default value
		width = w;
	}
	@Override
	String toString() {
		return "Rectangle Width=$width, Height=$height";
	}
	@Override
	public double computeArea() {
		return width * height;
	}

}
