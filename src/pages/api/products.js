import { initMongoose } from "../../../lib/connect";
import Product from "../../../models/Products";


export default async function handle(req, res) {
    await initMongoose();
    res.json(await Product.find().exec())
}