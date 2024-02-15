let codes = {
  "+49.4": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}
