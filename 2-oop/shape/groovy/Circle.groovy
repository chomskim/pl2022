class Circle implements Shape {
	
	double radius = 0;
	
	public Circle() {
		radius = 5; // default value
	}
	public Circle(r) {
		radius = r;
	}
	@Override
	String toString() {
		return "Circle Radius=${radius}";
	}
	@Override
	public double computeArea() {
		return Math.PI * radius * radius;
	}

}
