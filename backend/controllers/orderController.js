import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
// Placing orders using COD

const placeOrder = async (req,res) => {
    try {
        const {userId,items,amount,address} = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now(),
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        // Clear cart after order placement
        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success: true, message: 'Order Placed Successfully'})

    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}



// Placing orders using PayHere

const placeOrderPayHere = async (req,res) => {

}


// ALL Orders data for admin

const allOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}


// User Order data for frontend 

const userOders = async (req,res) => {
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})

    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}


// User update order status from admin panel

const updateStatus = async (req,res) => {
    try {
        const {orderId,status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success: true, message: 'Status Updated Successfully'})
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

export {placeOrder,placeOrderPayHere,allOrders,userOders,updateStatus}