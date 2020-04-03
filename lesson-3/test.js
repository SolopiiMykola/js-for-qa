const user = {
    name: "John",
    age: 30
  };
  const clone = Object.assign({names: "lol"}, user)
  console.log(clone)
  // now clone is a fully independent clone
  clone.name = "Pete"; // changed the data in it
  console.log(user.name); 