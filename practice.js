// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var counter = 0;
  _.each(numbers, function(nums) {
    if (nums % 5 === 0) {
      counter++;
      return nums;
    }
  });
  return counter;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    var startingLetter = fruit[0];
    if (startingLetter === letter) {
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(accum, toAdd, index) {
    var next = Number(toAdd.price.slice(1));
    return accum + next;
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  return _.reduce(desserts, function(counts, dessert) {
    if (counts[dessert.type] === undefined) {
      counts[dessert.type] = 1;
      return counts;
    }
    counts[dessert.type]++;
    return counts;
  }, {});
   /*
  var result = {};

  _.reduce(desserts, function(accumulator, dessert) {
    var dessertType = dessert.type;
    if (result[dessertType]) {
      result[dessertType] = result[dessertType] + 1;
    } else {
      result[dessertType] = 1;
    }
  }, 0);
  return result;
*/
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  return _.reduce(movies, function(accumulator, movie) {
    var movieYear = movie.releaseYear;
    if (movieYear >= 1990 && movieYear <= 2000) {
      accumulator.push(movie.title);
    }
    return accumulator;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  //use reduce to iterate over the array of objects given
  return _.reduce(movies, function(memo, movie) {
    // make an if statement to see if the time limit is shorter than the movie runtime
    if (timeLimit > movie.runtime) {
      memo = true;
    }
    return memo;
// set memo to false, so if it finds the value it changes it to true
  }, false);


  //return memo

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  //iterate through the fruits array with the map method
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
    //return each value with capital letters

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  //Iterate with the map method over the dessert array
  return _.map(desserts, function(item, key) {
    if (item.ingredients.includes('flour')) {
      item.glutenFree = false;
      return item;
    } else {
      item.glutenFree = true;
      return item;
    }

        // in the ingredients property make an if statement if the dessert contains flour
      //if true set the glutenfree property to false if false set it to true
  });


};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(item) {
    var individualPrice = Number(item.price.slice(1));
    item.salePrice = (individualPrice - coupon);
    return item;
  });

};
