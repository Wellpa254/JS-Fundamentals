const arg = process.argv[2];
const size = parseInt(arg);

if (!arg || isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}