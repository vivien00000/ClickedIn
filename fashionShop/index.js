const ex = require("express");
const ps = require("./shop");
const cors = require("cors");

const app = ex();
const s = ps.shop;

app.use(ex.json());
app.use(cors());

// Define a route to get all items in the shop
app.get("/api/shop/", (req, res) => {
  res.send(s);
});

app.get("/api/shop/:id", (req, res) => {
  let fashion = false;
  for (let i = 0; i < s.length; i++) {
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

app.get("/api/shop/items/classification/image", (req, res) => {
  let image = [];
  for (let i = 0; i < s.length; i++) {
    if (image.includes(s[i].image) == false) {
      image.push(s[i].image);
    }
  }
  if (type) {
    res.send(type);
    console.log(type);
  } else {
    let err = "Item not found!";
    res.status(404);
    res.send(err);
    console.error(err);
  }

  res.send(category);
});



app.listen(3001);
console.log(`Server is running on port ${3001}`);
