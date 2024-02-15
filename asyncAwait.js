async function counter(time) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(time);
      resolve(time + 1);
    }, 1000);
  });
  let nextTime = await promise;
  return nextTime;
}

counter(0)
  .then((result) => counter(result))
  .then((result) => counter(result))
  .then((result) => counter(result))
  .then((result) => counter(result))
  .then((result) => counter(result));
