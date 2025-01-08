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
        return false;
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
        await order.save();
        return true;
      } else false;
    } catch (err) {
      console.log(err);
    }
  }

  static async placeOrder(orderDetails) {
    try {
      let totalAmount = this.countTotalAmount(orderDetails);
      const order = await Order.create(orderDetails);
      if (order) {
        return { orderDetails: order, total: totalAmount };
      } else return false;
    } catch (err) {
      console.log(err);
    }
  }

  static async bulkOrder(orderDetails) {
    try {
      let total = 0;
      const placedOrders = [];
  
      for (const order of orderDetails) {
        const result = await this.placeOrder(order);
        if (!result) {
          for (const placedOrder of placedOrders) {
            await this.cancelOrder(placedOrder.id);
          }
          return {message:`Failed to place order for details: ${(order)}` };
        }
        placedOrders.push(result); 
        total += result.totalAmount;
      }
  
      return {
        message: "Orders placed successfully",
        totalAmount: total,
      };
    } catch (err) {
      console.error("Error placing bulk orders:", err);
      throw err;
    }
  }
  

  static async countTotalAmount(orderDetails) {
    try {

      const orderItems = orderDetails.orderItems;

      if (!orderItems || orderItems.length === 0) {
        throw new Error("No items found in the order.");
      }

        let totalAmount = 0;
        for (let i in orderItems) {
          let product = await ProductServices.getProductById(orderItems[i].product_id);
          if(!product){
            return json({message: "Product not found"});
          }
          let quantity = orderItems[i].quantity;
          totalAmount += product.price * quantity;
        }
        return totalAmount;
      }


   catch (err) {
      console.log ("Error calculating the total", err);
    }
  }

}