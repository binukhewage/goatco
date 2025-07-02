import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { Trash2 } from 'lucide-react';

const List = ({token}) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message || "Failed to fetch products")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message || "Something went wrong")
    }
  }

  const removeProduct = async (id) => {
    try {
      
      const response = await axios.post(backendUrl + "/api/product/remove", {id} , {headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message || "Something went wrong")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Products List</h2>
      <div className="overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-gray-100 min-w-[800px] font-semibold">
          <div>Image</div>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div className="text-center">Action</div>
        </div>

        {/* Product Rows */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 border-b min-w-[800px]"
          >
            <img
              src={item.image?.[0]}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price} {currency}</p>
            <div className="text-center">
              <Trash2 onClick={() => removeProduct(item._id)} className='text-red-500 ml-10'/>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default List
