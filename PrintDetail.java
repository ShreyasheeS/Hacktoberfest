import java.util.Scanner;

public class PrintDetail {

	@SuppressWarnings("resource")
	public static void main(String[] args) {
		
		System.out.println( "please enter your name :- ");
		Scanner in = new Scanner(System.in);
		String s = in.nextLine();
		
		System.out.println( "please enter your age :- ");
		String a = in.nextLine();
		
		System.out.println("Your name is " + s);
		System.out.println("Your age is " + a);

	}

}
