#!/usr/bin/node

/* 
At a popular bar, each customer has a set of favorite drinks, and will happily accept any drink among this set. For example, in the following situation, customer 0 will be satisfied with drinks 0, 1, 3, or 6.

preferences = {
    0: [0, 1, 3, 6],
    1: [1, 4, 7],
    2: [2, 4, 7, 5],
    3: [3, 2, 5],
    4: [5, 8]
}
A lazy bartender working at this bar is trying to reduce his effort by limiting the drink recipes he must memorize. Given a dictionary input such as the one above, return the fewest number of drinks he must learn in order to satisfy all customers.

For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone.
*/

function minDrinksToSatisfyAll(preferences) {
    let drinkToCustomers = new Map();

    // Create a mapping from drinks to customers who like them
    for (let customer in preferences) {
        for (let drink of preferences[customer]) {
            if (!drinkToCustomers.has(drink)) {
                drinkToCustomers.set(drink, new Set());
            }
            drinkToCustomers.get(drink).add(Number(customer));
        }
    }

    console.log(drinkToCustomers)

    let unsatisfiedCustomers = new Set(Object.keys(preferences).map(Number));
    let chosenDrinks = new Set();

    while (unsatisfiedCustomers.size > 0) {
        // Find the drink that satisfies the most unsatisfied customers
        let bestDrink = null;
        let maxCoverage = 0;

        for (let [drink, customers] of drinkToCustomers.entries()) {
            let coveredCustomers = new Set([...customers].filter(c => unsatisfiedCustomers.has(c)));

            if (coveredCustomers.size > maxCoverage) {
                maxCoverage = coveredCustomers.size;
                bestDrink = drink;
            }
        }

        // Add the chosen drink to the result set
        if (bestDrink !== null) {
            chosenDrinks.add(bestDrink);
            // Remove satisfied customers
            for (let customer of drinkToCustomers.get(bestDrink)) {
                unsatisfiedCustomers.delete(customer);
            }
            // Remove the chosen drink from the map
            drinkToCustomers.delete(bestDrink);
        }
    }

    return chosenDrinks.size;
}


const preferences = {
    0: [0, 1, 3, 6],
    1: [1, 4, 7],
    2: [2, 4, 7, 5],
    3: [3, 2, 5],
    4: [5, 8]
};

console.log(minDrinksToSatisfyAll(preferences)); // Output: 2
