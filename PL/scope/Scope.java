public class Scope {
	public static void main(String[] args) {
		int i = 100;
		int[] iarr = {1,2,3};
		String s2 = "";
		addj(iarr);
		for (int j=0; j<iarr.length; ++j) {
			String s1 = "Hello";
			s2 = s1;
			i = j;
			System.out.println(iarr[j]);
		}
		String s1 = "World";
		System.out.println(s1+" "+ s2);
		System.out.println("i="+i);
		System.out.println("j="+j);
	}
	static int j = 99;
	static void addj(int[] arr) {
		for (int i=0; i<arr.length; ++i) {
			arr[i] += j;
		}
	}
}
