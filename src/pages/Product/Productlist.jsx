import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SkeletonCard = () => (
  <div className="border rounded-lg overflow-hidden shadow-lg p-4 bg-white animate-pulse">
    <div className="rounded-md bg-gray-300 h-40 w-full"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
    </div>
    <div className="flex mt-4 gap-2 items-end">
      <div className="h-10 bg-gray-300 rounded-full w-1/4"></div>
      <div className="h-10 bg-gray-300 rounded-full w-1/4"></div>
    </div>
  </div>
);

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/product`);
      if (response.data.success) {
        setProductData(response.data.product);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='pt-24 px-8'>
      <div className='flex items-center justify-between m-10'>
        <h1 className='text-4xl font-bold'>Product List</h1>
        <a href="/product">
          <button className='rounded-full flex flex-row bg-orange-600 hover:bg-orange-500 text-lg text-white px-4 py-2'>Add Product</button>
        </a>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
          : productData.map((product, index) => (
              <div key={index} className='border rounded-lg overflow-hidden shadow-lg p-4 bg-white'>
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className='rounded-md h-40  object-cover'
                />
                <div className='p-4'>
                  <h2 className='text-xl font-bold'>{product.product_name}</h2>
                  <p className='text-gray-600'>{product.company_name}</p>
                  <p className='text-lg font-semibold mt-2'>{product.final_price}</p>
                  <p className='text-gray-500 text-sm mt-2'>{product.product_description}</p>
                </div>
                <div className='flex mt-4 gap-2 items-end'>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600'>
                    Edit
                  </button>
                  <button className='bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600'>
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductList;
