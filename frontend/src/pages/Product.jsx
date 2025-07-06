import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { ChevronDown, X } from 'lucide-react';
import { assets } from "../assets/assets";


const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSizeChart, setShowSizeChart] = useState(false);

  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image?.[0] || "");
    }
  }, [productId, products]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  if (!productData) {
    return <div className="opacity-0">Loading...</div>;
  }

  // Ensure these are always arrays
  const productImages = Array.isArray(productData.image) ? productData.image : [];
  const productSizes = Array.isArray(productData.sizes) ? productData.sizes : [];

  return (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Size Chart Modal */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-black bg-opacity-500 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 max-w-4xl max-h-[90vh] relative">
            <button 
              onClick={() => setShowSizeChart(false)}
              className="absolute top-2 right-2 p-1"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold mb-4">Size Chart</h2>
            <div className="overflow-auto max-h-[80vh]">
              {/* Replace with your actual size chart image */}
              <img 
                src={assets.sizechart} 
                alt="Size Chart" 
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x800?text=Size+Chart+Not+Available';
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/*-------------------------------- PRODUCT IMAGES --------------------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail Gallery */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productImages.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt={productData.name}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          
          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img 
              src={image || productImages[0]} 
              alt={productData.name} 
              className="w-full h-auto" 
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x800?text=Image+Not+Available';
              }}
            />
          </div>
        </div>

        {/*-------------------------------- PRODUCT DETAILS --------------------------------*/}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium mt-2">
            {productData.name || "Product Name"}
          </h1>
          <p className="mt-5 text-gray-500">
            {productData.description || "No description available"}
          </p>
          <p className="mt-5 text-3xl font-medium">
            {productData.price ? `${productData.price} ${currency}` : "Price not available"}
          </p>

          {/* Size Selection */}
          {productSizes.length > 0 && (
            <div className="mt-5 flex flex-col gap-4 my-8">
              <div className="flex justify-between items-center">
                <p>Select Size:</p>
              </div>
              <div className="flex gap-2">
                {productSizes.map((item, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSize(item)} 
                    className={`border-1 border-gray-200 rounded-md p-4 ${size === item ? "bg-black text-white" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div>
                <button 
                  onClick={() => setShowSizeChart(true)}
                  className="text-sm cursor-pointer underline text-gray-600 hover:text-black"
                >
                  Size Guide
                </button></div>
            </div>
            
          )}

          <button 
            className="w-1/2 bg-black text-white px-4 py-2 active:bg-gray-800"
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>
          
          {/* Dropdown Sections */}
          <div className="mt-8 space-y-4">
            {/* Product Details Dropdown */}
            <div className="border-b border-gray-200 pb-2">
              <button 
                onClick={() => toggleDropdown('product')}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                <span className="font-medium">PRODUCT DETAILS</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'product' && (
                <div className="py-2 text-gray-600">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Oversized</li>
                    <li>100% Cotton</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Shipping Details Dropdown */}
            <div className="border-b border-gray-200 pb-2">
              <button 
                onClick={() => toggleDropdown('shipping')}
                className="flex justify-between items-center w-full py-2 text-left"
              >
                <span className="font-medium">SHIPPING DETAILS</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'shipping' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'shipping' && (
                <div className="py-2 text-gray-600">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>All orders are processed within 3-5 days (CMB) / 5-7 days (Out of CMB)</li>
                    <li>Tracking information will be updated once you place the order</li>
                    <li>For inquiries contact us on socials</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default Product;