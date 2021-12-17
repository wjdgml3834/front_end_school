const inp = prompt();

if (
  inp ===
  inp
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ")
) {
  console.log("YES");
} else console.log("No");
