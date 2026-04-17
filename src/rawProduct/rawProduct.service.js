const prisma = require("../db");
const {
  findRawProducts,
  findRawProductById,
  insertRawProduct,
  deleteRawProduct,
  editRawProduct,
} = require("./rawProduct.repository");

const getAllRawProducts = async () => {
  const rawProducts = await findRawProducts();

  return rawProducts;
};

const getRawProductById = async (id) => {
  const rawProduct = await findRawProductById(id);

  if (!rawProduct) {
    throw Error("Product not found");
  }

  return rawProduct;
};

const createRawProduct = async (newRawProductData) => {
  const rawProduct = await insertRawProduct(newRawProductData);

  return rawProduct;
};

const deleteRawProductById = async (id) => {
  await getRawProductById(id);

  await deleteRawProduct(id);
};

const editRawProductById = async (id, productData) => {
  await getRawProductById(id);

  const product = await editProduct(id, productData)

  return product;
};

module.exports = {
  getAllRawProducts,
  getRawProductById,
  createRawProduct,
  deleteRawProductById,
  editRawProductById,
};