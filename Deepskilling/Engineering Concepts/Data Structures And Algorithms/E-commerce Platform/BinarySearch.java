public class BinarySearch {

    public static Product search(Product[] products, int id) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            }

            if (id < products[mid].productId) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return null;
    }
}
