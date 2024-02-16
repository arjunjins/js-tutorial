fetch("https://api.github.com/users/arjunjins")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user.avatar_url);
  });
