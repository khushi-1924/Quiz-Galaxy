const numbers = [0, 1, 2, 3];
for (let i = numbers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
console.log(numbers); // Random order of [0, 1, 2, 3]
