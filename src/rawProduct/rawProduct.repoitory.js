const prisma = require("../db");


const findRawProducts = async () => {
  const rawProducts = await prisma.rawProducts.findMany();

  return rawProducts;
};


const findRawProductById = async () => {
  const rawProduct = await prisma.rawProduct.findUnique({
    where: {
      id,
    },
  });

  return rawProduct;
};

const insertRawProduct = async () => {
  const rawProducts = await prisma.rawProducts.create({
    data: {
      name: rawProductData.name,
      status: rawProductData.status,
      category: rawProductData.category,
    },
  });

  return rawProducts;
};

const deleteRawProduct = async (id) => {
  await prisma.rawProducts.delete({
    where: id,
  });
};

const editRawProduct = async () => {
  const rawProducts = await prisma.products.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: rawProductData.name,
      status: rawProductData.status,
      category: rawProductData.category,
    },
  });

  return rawProducts;
};

module.exports = {
  findRawProducts,
  findRawProductById,
  insertRawProduct,
  deleteRawProduct,
  editRawProduct,
};