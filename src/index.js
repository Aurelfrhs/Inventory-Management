const express = require("express")
const app = express()
const dotenv = require("dotenv")


dotenv.config()

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use (express.json())

const productController = require("./products/products.controller.js")
const rawProductController = require("./rawProduct/rawProduct.controller.js")

app.use("/products", productController)
app.use("/rawProducts", rawProductController)

app.listen(PORT, () => {
    console.log(`Server Running On ${PORT}`)
}) 