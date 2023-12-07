function fraction(n) {
  if (n == 0) {
    return 1;
  } else {
    console.log(n - 1)
    return fraction (n - 1) * n;
  }
}

console.log(fraction(8))