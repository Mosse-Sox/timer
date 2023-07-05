const timer = (args) => {
  // ensure we are working with numbers
  const argsNums = args.map(Number);


  for (const num of argsNums) {

    // if num is not negative and 
    if (num >= 0 && Number.isInteger(num)) {
      setTimeout(() => {
        process.stdout.write("\x07");
        process.stdout.write(`${num} seconds \n`);
      }, num * 1000);
    }
  }

  return;
};

const userArgs = process.argv.slice(2);
// console.log(userArgs);

timer(userArgs);
