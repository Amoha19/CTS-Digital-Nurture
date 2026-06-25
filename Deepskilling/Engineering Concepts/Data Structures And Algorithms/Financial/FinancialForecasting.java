import java.util.Scanner;
public class FinancialForecasting {

    // Recursive method to calculate future value
    static double predictFutureValue(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive call
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Current Value: ");
        double currentValue = scanner.nextDouble();

        System.out.print("Enter Growth Rate (e.g., 0.10 for 10%): ");
        double growthRate = scanner.nextDouble();

        System.out.print("Enter Number of Years: ");
        int years = scanner.nextInt();

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        System.out.println("Current Value : " + currentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.println("Future Value  : " + futureValue);
    }
}