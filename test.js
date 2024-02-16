let user = {
  name: "Arjun",
  ref() {
    return this;
  },
};

console.log(user.ref().name);
