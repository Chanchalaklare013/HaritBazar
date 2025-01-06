import { Order } from "../models/order.model.js";
import { Vendor } from '../models/vendor.model.js'

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
            }
            else false;
        } catch (err) {
            console.log(err);
        }
    }

    static async placeOrder(orderDetails) {
        try {
            const order = await Order.create(orderDetails);
            if (order) return order;
            else return false;
        } catch (err) {
            console.log(err);
        }
    }
}