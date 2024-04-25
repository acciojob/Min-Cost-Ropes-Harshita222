function mincost(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2: Initialize minCost
    let minCost = 0;

    // Step 3: Continue until there is only one rope left
    while (arr.length > 1) {
        // Step 4: Remove the first two elements (smallest ropes)
        let rope1 = arr.shift();
        let rope2 = arr.shift();

        // Step 5: Calculate the cost of connecting these two ropes
        let cost = rope1 + rope2;

        // Step 6: Add the cost to minCost
        minCost += cost;

        // Step 7: Insert the cost back into the array in its correct position
        let index = arr.findIndex((rope) => rope >= cost);
        if (index === -1) {
            arr.push(cost); // Append at the end if cost is greater than all remaining ropes
        } else {
            arr.splice(index, 0, cost); // Insert at the correct position
        }
    }

    // Step 8: Return the minCost
    return minCost;
}

module.exports = mincost;
