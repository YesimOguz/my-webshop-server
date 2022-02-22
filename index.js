const express = require("express");
const app = express();
const port = 4000;
const authRouter = require("./routers/auth");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");

app.use(express.json());
app.use("/users", authRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.listen(port, () => console.log(`listening on port :${port}`));
