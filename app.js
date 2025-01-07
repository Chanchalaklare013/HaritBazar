import express  from 'express';
import { connection } from './config/dbConfig.js';
import UserRouter from './routes/user.routes.js';
import VendorRouter from './routes/vendor.routes.js';



const app = express();

app.use(express.json());

app.use("/user",UserRouter);
app.use("/vendor",VendorRouter);


app.listen(4000, () => {
    console.log("server started....");
})