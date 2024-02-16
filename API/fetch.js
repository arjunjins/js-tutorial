async function getRequest() {
  let response = await fetch("http://localhost:3000/");
  let json = undefined;
  if (response.ok) {
    console.log("Successfully got response from the server");
    console.log("Headers : ");
    for (const [key, value] of response.headers) {
      console.log(`${key} : ${value}`);
    }
    json = await response.text();
    return json;
  } else {
    console.log("Some error occured : " + response.status);
  }
}

//getRequest().then((json) => console.log(json));

async function postRequest() {
  let user = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
  };

  let response = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    console.log("Recieved response from server");
  } else {
    console.log("Error" + response.status);
  }
  console.log(response);
}

postRequest();
