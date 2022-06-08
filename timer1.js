const args = process.argv.slice(2);

const timer = (arr) => {

  if (!arr) {
    return;
  }

  return arr.forEach(element => {
    if (element <= 0) {
      return null;
    }
    if (isNaN(element)) {
      return null;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, element * 1000);
  });

};

timer(args);