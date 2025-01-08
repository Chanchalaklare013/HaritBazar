import express  from "express";
import WishlistRouter from "./routes/wishlist.routes.js";
import ReviewRouter from "./routes/reviews.routes.js";
import CartRouter from "./routes/cart.routes.js";
import { connection } from './config/dbConfig.js';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/wishlist",WishlistRouter);
app.use("/review",ReviewRouter);
app.use("/cart",CartRouter);
app.listen(4000, () => {
    console.log("server started....4000");
})