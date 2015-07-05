exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    processDir(data);

    function processDir(dir) {
      var i, len, file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    return listOfFiles;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    return doIt(arr);

    function doIt(a) {
      var i, len, item;

      for (i = 0, len = arr.length; i < len; i++) {
        item = arr.splice(i, 1)[0];
        temp.push(item);

        if (arr.length) {
          doIt(arr);
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    function logResult() {
      answer.push(
        temp.slice()
      );
    }
  },

  fibonacci: function(n) {
    var a = 0, b = 1, total = 1;
    for(var i = 2; i <= n; i++) {
        total = a + b;
        a = b;
        b = total;
    }
    return total;
  },

  validParentheses: function(n) {
    var numStrings = n.length;

    for (var i = 0; i < numStrings; i++){
      alert(n[i]);



    }
  }




  //   var stack = [];
  //   var validStack = [];
  //   var i, char, pos;
  //
  //   for (i = 0; char = n[i]; i++) {
  //     pos = parentheses.indexOf(char);
  //
  //     if (pos === -1) {
  //       continue;
  //     }
  //
  //     if (pos % 2 === 0) {
  //       stack.push(pos + 1)
  //     } else {
  //       if (stack.pop() !== pos) {
  //         return false;
  //       }
  //     }
  //   }
  //
  //   return stack;
  // }
};
