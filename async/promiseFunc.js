new Promise((resolve, reject) => {
  let count = 0;
  setTimeout(() => {
    console.log(count);
    resolve(count + 1);
  }, 1000);
})
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(result);
        resolve(result + 1);
      }, 1000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(result);
        resolve(result + 1);
      }, 1000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(result);
        resolve(result + 1);
      }, 1000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(result);
        resolve(result + 1);
      }, 1000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(result);
        resolve(result + 1);
      }, 1000);
    });
  });
