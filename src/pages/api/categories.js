import { initMongoose } from "../../../lib/connect";
import Product from "../../../models/Products";

export default async function handler(req, res) {
  await initMongoose();

  if (req.method === "GET") {
    try {
      const distinct = await Product.distinct("categories");
      const products = await Product.find();
      const categories = distinct.map((category) => {
        const item = products.find((item) =>
          item.categories.includes(category)
        );
        return [category, item.image];
      });
      res.json(categories);
    } catch (error) {
      console.error(error.message);
    }
  }
}
