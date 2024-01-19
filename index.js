
const ex = require("express");
const app = ex();
const cors = require("cors");

app.use(ex.json());
app.use(cors());

const { shop } = require("./shop_data");

// Define a route to get all items in the shop
app.get("/api/shop/items", (req, res) => {
  res.send(shop);
});

// Define a route to get items by category
app.get("/api/shop/items/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const categoryItems = shop[category];

  if (categoryItems) {
    res.send(categoryItems);
  } else {
    res.status(404);
    res.send("Category not found!");
  }
});

// Define a route to get item details by category and ID
app.get("/api/shop/items/:category/:id", (req, res) => {
  const category = req.params.category.toLowerCase();
  const itemId = Number(req.params.id);

  if (shop[category]) {
    const item = shop[category].find((item) => item.id === itemId);

    if (item) {
      res.send(item);
    } else {
      res.status(404);
      res.send("Item not found!");
    }
  } else {
    res.status(404);
    res.send("Category not found!");
  }
});

// Other routes related to pets...

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});