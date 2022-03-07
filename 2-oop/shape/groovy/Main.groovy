class Main {
	
	//static List<Shape> allShapes;
	
	/** Iterate over all the Shapes, getting their areas */
	public static double totalAreas(List<Shape> allShapes) {
		double total = 0.0;
		/*
		Iterator<Shape> it = allShapes.iterator();
		while (it.hasNext()) {
			Shape s = it.next();
			System.out.println(s.toString());
			total += s.computeArea();
		}
		
		for (Shape s:allShapes){
			System.out.println(s.toString());
			total += s.computeArea();
		}
		*/
		for (int i = 0; i<allShapes.size(); ++i) {
			Shape s = allShapes.get(i);
			System.out.println(s.toString());
			total += s.computeArea();
		}
		return total;
	}
	public static void main(String[] argv) {
		List<Shape> allShapes = new ArrayList<Shape>();
		allShapes.add(new Rectangle(2,3));
		allShapes.add(new Circle(5));
		allShapes.add(new Rectangle(5.0,5.0));
		allShapes.add(new Circle(8.0));
		allShapes.add(new Rectangle(9,9));
		allShapes.add(new Circle(0));
		allShapes.add(new Rectangle(0,0));
		
		double tot = totalAreas(allShapes);
		System.out.println("Total Area = " + tot);
		
	}

}
