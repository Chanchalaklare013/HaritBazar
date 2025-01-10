import { Order } from '../models/order.model.js';
import { Vendor } from '../models/vendor.model.js';
import { ProductServices } from './product.service.js';

export class OrderServices {
  static async getOrdersforVendor(vendorId) {
    try {
      const user = await Vendor.findById(vendorId);
      if (user) {
        const userId = user.user_id;
        const orders = await Order.find({ user_id: userId });
        if (orders) return orders;
        else false;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  }
  static async getOrdersOfUser(userId) {
    try {
      const orders = await Order.find({ user_id: userId });
      if (orders) return orders;
      else false;
    } catch (err) {
      console.log(err);
    }
  }
  static async getAllOrders() {
    try {
      const orders = await Order.find();
      if (orders) return orders;
      else false;
    } catch (err) {
      console.log(err);
    }
  }
  static async orderDetails(orderId) {
    try {
      const order = await Order.findById(orderId);
      if (order) return order;
      else false;
    } catch (err) {
      console.log(err);
    }
  }
  static async cancelOrder(orderId) {
    try {
      const order = await Order.findById(orderId);
      if (order) {
        order.orderStatus = 'Cancelled';
        order.save();
        return true;
      } else false;
    } catch (err) {
      console.log(err);
    }
  }

  static async placeOrder(orderDetails) {
    try {
       
      let totalAmount = countTotalAmount(orderDetails);
      const order = await Order.create(orderDetails);
      if (order) {
        return json({orderDetails: order, total: totalAmount});
      } else return false;
    } catch (err) {
      console.log(err);
    }
  }

  static async bulkOrder(orderDetails) {
    try {
      let allPlaced=  true;
      for (let order of orderDetails) {
        let result = this.placeOrder(order);
        if (!result) {
          allPlaced = false;
          break;
        } 
      }

      if(allPlaced){
        return true;
      }else{
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async countTotalAmount(orderDetails){
    try{
        // orderItems: [
      //   {
      //     product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      //     quantity: { type: Number, required: true },
      //   },
      // ],
      let bulkAmount = 0;
      if(orderDetails.length == 1){

        let product = ProductServices.getProductById(orderItems[0].product_id);
        let quantity = orderDetails.orderItems[0].quantity;
        let totalAmount = product.price*quantity;
        return totalAmount;
      } else{
        for(let order in orderDetails){
          let product = ProductServices.getProductById(orderItems[i].product_id);
          let quantity = orderDetails.orderItems[i].quantity;
          bulkAmount += product.price*quantity;
        }

        return bulkAmount;
      }

    }catch(err){
      console.log(err);
    }
  }
}
