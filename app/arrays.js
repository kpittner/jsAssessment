exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
   var total = 0;
    for (var i = 0; i < arr.length; i++) {

        total += arr[i];

    }
    return total;
  },

  remove : function(arr, item) {
    var index = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        index.push(arr[i]);
      }
    }
    return index;
  },

  removeWithoutCopy : function(arr, item) {
    var i, len;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      };
    };
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count ++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var s = {};
    var doubles = [];
    arr.forEach(function(el) {
      s[el] = s[el] ? s[el] + 1 : 1;
    });

    for (var item in s) {
      if (s.hasOwnProperty(item) && s[item] > 1) {
        doubles.push(+item);
      }
    }
    return doubles;
  },

  square : function(arr) {
    var square = [];
    for (var i = 0; i < arr.length; i++) {
      square.push(arr[i] * arr[i]);
    }
    return square;
  },

  findAllOccurrences : function(arr, target) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        array.push(i);
      }
    }
    return array;
  }
};
