import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { Box } from 'lucide-react'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return

    try {
      const response = await axios.post(`${backendUrl}/api/order/list`, {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Something went wrong')
    }
  }


  const statusHandler = async (e,orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status',{orderId,status:e.target.value},{headers:{token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Something went wrong')
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h3 className="text-2xl font-bold mb-6">Orders</h3>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="border border-gray-300 rounded-xl p-4 shadow-sm bg-gray-50">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1 space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Box className="w-5 h-5 text-gray-700" />
                    <span>{item.name} x {item.quantity} <span className="text-xs">({item.size})</span></span>
                  </div>
                ))}
              </div>

              <div className="flex-1 text-sm space-y-1">
                <p className="font-semibold">{order.address.firstName} {order.address.lastName}</p>
                <p>{order.address.address}, {order.address.city}, {order.address.postalCode}</p>
                <p>{order.address.phone}</p>
              </div>

              <div className="flex-1 text-sm space-y-1">
                <p>Items: <span className="font-medium">{order.items.length}</span></p>
                <p>Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? "✅ Done" : "❌ Pending"}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </div>

              <div className="flex-1 text-sm space-y-1">
                <p className="font-bold">{currency} {order.amount}</p>
                <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className="w-full p-1 border border-gray-300 rounded-md mt-2">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
