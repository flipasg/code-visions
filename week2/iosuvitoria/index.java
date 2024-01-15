// 1º Idea en java

// public class index {

// public static void main(String[] args) {
// for (int i = 1; i <= 100; i++) {
// if (i % 3 == 0 && i % 5 == 0) {
// System.out.println("Fizzbuzz");
// } else if (i % 5 == 0) {
// System.out.println("Buzz");
// } else if (i % 3 == 0) {
// System.out.println("Fizz");
// } else {
// System.out.println(i);
// }
// }
// }
// }

// 2º Idea en java. Tomado de index.js. Aplicación de la solución creada en el
// otro archivo.

public class index {

    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            String output = "";
            if (i % 3 == 0) {
                output += "Fizz";
            }
            if (i % 5 == 0) {
                output += "Buzz";
            }
            System.out.println(output.isEmpty() ? i : output);
        }
    }
}
