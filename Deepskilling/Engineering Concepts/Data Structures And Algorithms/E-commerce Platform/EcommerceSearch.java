import java.util.Scanner;
public class EcommerceSearch {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] products = {

            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")

        };

        System.out.print("Enter Product ID to search: ");
        int searchId = scanner.nextInt();

        // Linear Search
        System.out.println("Linear Search:");

        Product result1 =
                LinearSearch.search(products, searchId);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Product Not Found");


        // Binary Search
        System.out.println("\nBinary Search:");

        Product result2 =
                BinarySearch.search(products, searchId);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Product Not Found");
    }
}