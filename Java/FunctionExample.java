public class FunctionExample {

  static void swap1(int p, int q){
    int temp = p;
    p = q;
    q = temp;
  }
  static void swap2(Integer p, Integer q){
    Integer temp = p;
    p = q;
    q = temp;
  }
  static void swap2(int[] arr){
    int temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  public static main(String[] args){
    int a = 100;
    int b = 200;
    int[] vals = {100, 200};

    swap1(a,b)
    System.out.println(a+" "+b);

    swap2(a,b)
    System.out.println(a+" "+b);

    swap3(vals)
    System.out.println(vals[0]+" "+vals[1]);


  }
  

}