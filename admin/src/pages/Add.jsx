import React from 'react';
import upload from '../assets/upload.jpg';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {

    const [image1,setImage1] = useState(false)
    const [image2,setImage2] = useState(false)
    const [image3,setImage3] = useState(false)
    const [image4,setImage4] = useState(false)

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("Men")
    const [subCategory,setSubCategory] = useState("TopWear")
    const [bestseller,setBestseller] = useState(false)
    const [sizes,setSizes] = useState([])


    const onSubmitHandler = async (e) => {
      e.preventDefault()

      try {
        
        const formData = new FormData()

        formData.append("name",name)
        formData.append("description",description)
        formData.append("price",price)
        formData.append("category",category)
        formData.append("subCategory",subCategory)
        formData.append("bestseller",bestseller)
        formData.append("sizes",JSON.stringify(sizes))
        
        image1 && formData.append("image1",image1)
        image2 && formData.append("image2",image2)
        image3 && formData.append("image3",image3)
        image4 && formData.append("image4",image4)
        
        const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})

        if (response.data.success) {
          toast.success(response.data.message)
          setName('')
          setDescription('')
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
          setPrice('')
        } else {
          toast.error(response.data.message)
        }

      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-6">
      <div>
            <p className='mb-2'>Upload Images</p>

            <div className='flex gap-3 pt-5'>
                <label htmlFor="image1">
                    <img src={!image1 ? upload : URL.createObjectURL(image1)} alt="" className='w-25 border border-gray-300' />
                    <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
                </label>
                <label htmlFor="image2">
                    <img src={!image2 ? upload : URL.createObjectURL(image2)} alt="" className='w-25 border border-gray-300' />
                    <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
                </label>
                <label htmlFor="image3">
                    <img src={!image3 ? upload : URL.createObjectURL(image3)} alt="" className='w-25 border border-gray-300' />
                    <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
                </label>
                <label htmlFor="image4">
                    <img src={!image4 ? upload : URL.createObjectURL(image4)} alt="" className='w-25 border border-gray-300' />
                    <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
                </label>
            </div>
        </div>

      {/* Product Name */}
      <div className="w-full max-w-[500px]">
        <p className="mb-2 font-medium">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type Here"
          required
          className="border w-full px-3 py-2 rounded"
        />
      </div>

      {/* Product Description */}
      <div className="w-full max-w-[500px]">
        <p className="mb-2 font-medium">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Type Here"
          required
          className="border w-full px-3 py-2 rounded resize-none"
        />
      </div>

      {/* Category, Subcategory, Price */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]">
        {/* Category */}
        <div className="flex-1">
          <p className="mb-2 font-medium">Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        {/* Sub Category */}
        <div className="flex-1">
          <p className="mb-2 font-medium">Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className="w-full px-3 py-2 border rounded">
            <option value="TopWear">TopWear</option>
            <option value="BottomWear">BottomWear</option>
          </select>
        </div>

        {/* Price */}
        <div className="flex-1">
          <p className="mb-2 font-medium">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="2500 LKR"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>
      <div>
  <p className='mb-2'>Product Sizes</p>
    <div className='flex gap-3'>
      <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>
        <p className={`${sizes.includes("S") ? "bg-gray-500" : "bg-slate-200"} text-black px-3 py-1 cursor-pointer`}>S</p>
      </div>
      <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
        <p className={`${sizes.includes("M") ? "bg-gray-500" : "bg-slate-200"} text-black px-3 py-1 cursor-pointer`}>M</p>
      </div>
      <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
        <p className={`${sizes.includes("L") ? "bg-gray-500" : "bg-slate-200"} text-black px-3 py-1 cursor-pointer`}>L</p>
      </div>
      <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
        <p className={`${sizes.includes("XL") ? "bg-gray-500" : "bg-slate-200"} text-black px-3 py-1 cursor-pointer`}>XL</p>
      </div>
      <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
        <p className={`${sizes.includes("XXL") ? "bg-gray-500" : "bg-slate-200"} text-black px-3 py-1 cursor-pointer`}>XXL</p>
      </div>
      <div onClick={() => setSizes(prev => prev.includes("XXXL") ? prev.filter(item => item !== "XXXL") : [...prev,"XXXL"])}>
        <p className={`${sizes.includes("XXXL") ? "bg-gray-500" : "bg-slate-200"} text-black px-3 py-1 cursor-pointer`}>XXXL</p>
      </div>
    </div>
  </div>

          <div className='flex gap-2 mt-2'>
            <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
            <label className='cursor-pointer' htmlFor="bestseller">Add to BestSeller</label>
          </div>

          <button type='submit' className='bg-black text-white py-2 px-3 rounded-sm'>Add Product</button>
    </form>
  );
};

export default Add;
