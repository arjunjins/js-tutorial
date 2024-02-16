function countT(counter, callback) {
  setTimeout(() => {
    console.log(counter);
    callback(counter + 1);
  }, 1000);
}

countT(0, (time) => {
  console.log("0 is now printed");
  countT(time, () => {
    console.log("1 is now printed");
    countT(time, () => {
      console.log("2 is now printed");
    });
  });
});
