const prisma = require(".../db");

const findProducts = async () => {
  const products = await prisma.products.findMany();

  return products;
};

const findProductById = async () => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};

const insertProduct = async () => {
  const products = await prisma.products.create({
    data: {
      name: productData.name,
      status: productData.status,
      category: productData.category,
    },
  });

  return products;
};

const deleteProduct = async (id) => {
  await prisma.products.delete({
    where: id,
  });
};

const editProduct = async () => {
  const products = await prisma.products.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: productData.name,
      status: productData.status,
      category: productData.category,
    },
  });

  return products;
};

module.exports = {
  findProducts,
  findProductById,
  insertProduct,
  deleteProduct,
  editProduct,
};