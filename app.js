const arrays = require('lodash');

const items = [1, 2, 4, 6, 1, 3, 4, 5, 6, 8, 4, 5,];

const newItems = arrays.uniq(items)
console.log(newItems)   