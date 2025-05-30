const arg = process.argv[2];

// parseInt converts string to integer or NaN if not possible
const num = parseInt(arg);

if (!arg || isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
