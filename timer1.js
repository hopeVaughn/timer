// A JS file that takes arguments from the command line and sets a timer based on the arguments

// assigns the CL arguments to a variable only containing the values of the arguments
const args = process.argv.slice(2);

const timer = (arr) => {
  // end program if there are no arguments provided
  if (!arr) {
    return;
  }
  // because the CL provides the arguments as an array I used built in array methods
  return arr.forEach(element => {
    // will skip this argument if it equals 0 or a negative number
    if (element <= 0) {
      return null;
    }
    // checks the type even though it's a string to see if it can be converted to a number. Otherwise it skips
    if (isNaN(element)) {
      return null;
    }
    // sets a timer value based on each number provided in the element and returns a sound in the apropriate interval 
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element * 1000);
  });

};

timer(args);