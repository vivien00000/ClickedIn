
const ex = require("express");
const ps = require("./shop");
const cors = require("cors");

const app = ex();
const s = ps.shop;

app.use(ex.json());
app.use(cors());

// Define a route to get all items in the shop
app.get("/api/shop/items", (req, res) => {
  res.send(s);
});

app.get("/api/shop/items/:category", (req, res) => {
  let fashion = false;
  for (let i=0; i<s.length; i++){
    if (s[i].id == Number(req.params.id)) {
      fashion = s[i];
      break;
    }
  }
  if (fashion) {
    res.send(fashion);
    console.log(fashion);
  } else {
    let err = "Item not found!";
    res.status(404);
    res.send(err);
    console.error(err);
  }
});

app.get("/api/shop/items/:category", (req, res) => {
  let category = [];
  for (let i=0; i< s.length; i++){
    if (category.includes(s[i].category) == false) {
      category.push(s[i].category);
    }
  }

  res.send(category);
});

let port = 3001;
app.listen(port);
console.log("Starting server at port " + port + "...");
