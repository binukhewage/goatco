import express from 'express'
import { placeOrder,placeOrderPayHere,allOrders,userOders,updateStatus } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js'
import adminAuth from '../middleware/adminAuth.js'

const orderRouter = express.Router()

// Admin FEATURES
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment FEATURES
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/payhere',authUser,placeOrderPayHere)

// User FEATURES
orderRouter.post('/userorders',authUser,userOders)

export default orderRouter;