import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductForm = () => {
  const [image, SetImage] = useState(false);
  const [category, setCategory] = useState([])
  
  const [data, setData] = useState({
    product_name: "",
    company_name: "",
    final_price: "",
    category_id: "",
    product_size: "",
    product_price: "",
    product_image: "",
    product_discount: "",
    product_description: "",
    product_rating: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onImageChange = (event) => {
    SetImage(event.target.files[0]);
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("product_name", data.product_name);
    formData.append("company_name", data.company_name);
    formData.append("final_price", data.final_price);
    formData.append("category_id", data.category_id);
    formData.append("product_size", data.product_size);
    formData.append("product_price", data.product_price);
    formData.append("product_image", image);
    formData.append("product_discount", data.product_discount);
    formData.append("product_description", data.product_description);
    formData.append("product_rating", data.product_rating);
    console.log(data.category_id);
    const response = await axios.post(
      `http://127.0.0.1:8000/api/product`,
      formData
    );
    if (response.status === 200) {
      setData({
        product_name: "",
        company_name: "",
        final_price: "",
        category_id: "",
        product_size: "",
        product_price: "",
        product_image: "",
        product_discount: "",
        product_description: "",
        product_rating: "",
      });
      SetImage(false)
    }else{
        console.log("Error", error)
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/category`);
      if (response.data.success) {
        console.log(response.data.category)
        setCategory(response.data.category);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }
  console.log(category);
  
  useEffect(() => {
    fetchCategory()
  },[])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-10 pt-24">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl text-black">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Add a New Product
        </h1>

        <form onSubmit={onSubmitHandler} className="space-y-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                value={data.product_name}
                onChange={onChangeHandler}
                className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company_name"
                value={data.company_name}
                onChange={onChangeHandler}
                className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Final Price
              </label>
              <input
                type="number"
                name="final_price"
                value={data.final_price}
                onChange={onChangeHandler}
                className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
                placeholder="Enter final price"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Category ID
              </label>
             
              <select
              name="category_id"
              onChange={onChangeHandler}
              value={data.category_id}
              className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
            >
              <option value="">Select a category</option>
              {category.map((cat) => (
                <option value={cat.id}>
                  {cat.category_name}
                </option>
              ))}
            </select>
              
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Product Size
              </label>
              <input
                type="text"
                name="product_size"
                value={data.product_size}
                onChange={onChangeHandler}
                className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
                placeholder="Enter product size"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Product Price
              </label>
              <input
                type="number"
                name="product_price"
                value={data.product_price}
                onChange={onChangeHandler}
                className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
                placeholder="Enter product price"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Product Discount (%)
              </label>
              <input
                type="number"
                name="product_discount"
                value={data.product_discount}
                onChange={onChangeHandler}
                className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
                placeholder="Enter discount percentage"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Product Rating
              </label>
              <input
                type="text"
                name="product_rating"
                value={data.product_rating}
                onChange={onChangeHandler}
                className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none"
                placeholder="Enter product rating"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Product Description
            </label>
            <textarea
              name="product_description"
              value={data.product_description}
              onChange={onChangeHandler}
              className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none h-32 resize-none"
              placeholder="Enter product description"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Product Image
            </label>
            <input
            //   src={image}
            // value={data.product_image}
              onChange={onImageChange}
              type="file"
              name="product_image"
            //   onChange={handleImageChange}
              className="w-full bg-gray-200  p-3 rounded-lg focus:outline-none text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-400 transition-all duration-300"
          >
            Add Product
          </button>

          <a
            href="/productlist"
            className="w-full flex py-3 justify-center mt-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-400 transition-all duration-300"
          >
            Back
          </a>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
