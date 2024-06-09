function isEnoughCapacity(products, containerSize) {

  let totalProducts = 0;
  for (let quantity of Object.values(products)) {
    totalProducts += quantity;
  }
  return totalProducts <= containerSize;
}

// Приклади викликів функції
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 10)); // true
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 6)); // true
console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 5)); // false
console.log(isEnoughCapacity({ apples: 2, grapes: 4, bananas: 3 }, 8)); // true
console.log(isEnoughCapacity({ apples: 2, grapes: 4, bananas: 3 }, 7)); // false
