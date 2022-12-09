const express = require("express");
const app = express();
const { users } = require("./users");
const path = require("path");

// ALL STATIC
app.use(express.static("./public"));

// JSON API PLAIN
app.get("/api/users", (req, res) => {
  res.json(users);
});

// JSON API - PARAMS
app.get("/api/users/:userID", (req, res) => {
  const { userID } = req.params;
  const user = users.filter((user) => {
    return user.name.startsWith(userID);
  });
  return res.json(user);
});

// JSON API - QUERY STRING
app.get("/api/query", (req, res) => {
  // console.log(req.query);
  // res.send("hello");
  const { search } = req.query;
  let sortedUser = [...users];
  // console.log(search);
  if (search) {
    sortedUser = sortedUser.filter((user) => {
      if (
        user.name.includes(search) ||
        user.email.includes(search) ||
        user["company info"]["company name"].includes(search)
      )
        return user;
    });
  }
  // if (sortedUser.length < 1) {
  //   return res.status(200).send("no user match your search");
  // }
  res.status(200).json(sortedUser);
});

// POST ERROR PAGE
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./error.html"));
});

app.listen(5000, () => {
  console.log("server is listening at port 5000...");
});
