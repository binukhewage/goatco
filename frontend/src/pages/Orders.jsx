import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext)

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      
      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)

          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadOrderData()
  },[token])

  return (
    <div className='border-t py-16 px-4 sm:px-6 lg:px-8'>
      <div className='text-2xl mb-8'>
        <Title text1={"MY"} text2={"ORDERS"}/>
      </div>

      <div className='space-y-6'>
        {orderData.map((item, index) => (
          <div key={index} className='py-6 border-t border-gray-200'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Left - Product Image and Details */}
              <div className='flex items-start gap-4 md:gap-6'>
                <img 
                  src={item.image[0]} 
                  alt={item.name} 
                  className='w-16 sm:w-20 ' 
                />
                <div className='text-black'>
                  <p className='text-sm sm:text-base font-medium'>{item.name}</p>
                  <div className='flex flex-wrap items-center gap-3 mt-2 text-gray-700'>
                    <p>{currency} {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1 text-sm'>Date: <span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1 text-sm'>Payment Method: <span className='text-gray-500'>{item.paymentMethod}</span></p>
                </div>
              </div>

              {/* Middle - Order Status */}
              <div className='flex items-center justify-center'>
                <div className='flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full'>
                  <div className='w-2 h-2 rounded-full bg-green-500'></div>
                  <p className='text-sm text-gray-600'>{item.status}</p>
                </div>
              </div>

              {/* Right - Track Order Button */}
              <div className='flex items-center justify-end'>
                <button onClick={loadOrderData} className='border border-black px-6 py-2 text-sm font-medium rounded-sm text-gray-600 hover:bg-gray-50 transition-colors'>
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders