import express  from 'express';
import categoryRouter from './routes/category.routes.js';
import { connection } from './config/dbConfig.js';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import cartRouter from './routes/cart.routes.js'
import orderRouter from './routes/order.routes.js'
import vendorRouter from './routes/vendor.routes.js'
import wishlistRouter from './routes/wishlist.routes.js'
import reviewRouter from './routes/wishlist.routes.js'
import recycleRouter from './routes/product.recycle.js'
import donationRouter from './routes/product.donation.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/category', categoryRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/vendor',vendorRouter)
app.use('/wishlist',wishlistRouter)
app.use('/review',reviewRouter)
app.use('/recycle',recycleRouter)
app.use('/donation',donationRouter)

app.listen(4000, () => {
    console.log("server started....");
})