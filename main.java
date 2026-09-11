public class Main {
    public static void main(String[] args) {
        checkingAccount myAccount = new checkingAccount("Adrian", 500.00);
        myAccount.register("Hello123");
        myAccount.getBal("Hello122");
    }
}

class checkingAccount {
    public String name;
    private String password;
    private double balance;
    public static final double incomeTaxRate = 0.27;

    public checkingAccount(String storedName, double storedBalance) {
        name = storedName;
        balance = storedBalance;
    }

    public void register(String storedPassword) {
        password = storedPassword;
    }

    public void getBal(String checkPassword) {
        if (checkPassword != password) {
            System.out.println("Incorrect password");
            return;
        } else {
            System.out.println("Balance for " + name + ": $" + balance);
        }
    }
}
