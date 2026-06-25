public class LinearSearch {

    public static Product search(Product[] products, int id) {

        for (int i = 0; i < products.length; i++) {

            if (products[i].productId == id) {
                return products[i];
            }
        }

        return null;
    }
}
