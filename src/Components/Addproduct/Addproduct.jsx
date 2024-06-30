import React, { useState } from 'react'
import { FaFileUpload } from "react-icons/fa";

const Addproduct = () => {
  const [Image, setImage] = useState(false);
  const [ProductDetails, setProductDetails] = useState(
    {
      name:'',
      image:'',
      category:'Mobiles',
      new_price:'',
      old_price:'',
    })
  const changeHandler=(e)=>{
    setProductDetails({
      ...ProductDetails,
      [e.target.name]:e.target.value
    })
  }
  const imageHandler=(e)=>{
    setImage(e.target.files[0]);
  }
  const addProduct=async()=>{
    console.log(ProductDetails);
    const Product=ProductDetails;
    let responseData;
    let formData=new FormData();
    formData.append('image',Image);
    await fetch(`${import.meta.env.VITE_URL+'/upload'}`,{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData
    }).then(res=>res.json()).then(data=>responseData=data);
    if(responseData.success){
      Product.image=responseData.img_url;
      console.log(Product);
      await fetch(`${import.meta.env.VITE_URL+'/addproduct'}`,{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(Product)
      }).then(res=>res.json()).then((data)=>data.success?alert('Product Added'):alert('Product not added '));
    }
  }
  return (
    <div className='box-border w-full max-w-[800px] py-[30px] px-12 my-5 mx-7 rounded-md bg-slate-50 max-md:w-auto max-md:p-[30px] max-md:m-5'>
        <div className="addproductitemfields w-full text-zinc-500 text-base ">
          <p>Product title: </p>
          <input type="text" value={ProductDetails.name} onChange={changeHandler} name="name" placeholder='type here!' className='box-border w-full h-12 rounded-sm pl-[15px] border-[1px] border-gray-300 outline-none text-gray-400 text-base font-mono'/>
        </div>
        <div className="addproduct-price flex gap-8 ">
          <div className="addproductitemfields w-full text-zinc-500 text-base">
            <p>Price</p>
            <input type="text" value={ProductDetails.old_price} onChange={changeHandler} name='old_price' placeholder='type your price' className='box-border  w-full h-12 rounded-sm pl-[15px] border-[1px] border-gray-300 outline-none text-gray-400 text-base font-mono'/>
          </div>
          <div className="addproductitemfields w-full text-zinc-500 text-base">
            <p>Offer-Price</p>
            <input type="text" value={ProductDetails.new_price} onChange={changeHandler} name='new_price' placeholder='type your price' className='box-border  w-full h-12 rounded-sm pl-[15px] border-[1px] border-gray-300 outline-none text-gray-400 text-base font-mono'/>
          </div>
        </div>
        <div className="addproductitemfields w-full text-zinc-500 text-base flex flex-col gap-4 my-6">
          <p>Product Category: </p>
          <select name="category"  value={ProductDetails.category} onChange={changeHandler} className='addproductselector w-[60%] p-2 rounded-md border-[1px] border-blue-400'>
            <option value="laptops">Laptops</option>
            <option value="Mobiles">Mobile Phones</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div className="addproductitemfields w-full text-zinc-500 text-base">
          <label htmlFor="file-input">
            <div className=' h-[120px] w-[120px] object-contain flex justify-center items-center shadow-sm rounded-2xl shadow-blue-900 cursor-pointer'>{Image?<img src={URL.createObjectURL(Image)} />:<FaFileUpload size={50} color='gray'/>}</div>
          </label>
          <input onChange={imageHandler} type="file" name='image' id='file-input' hidden className='box-border  w-full h-12 rounded-sm pl-[15px] border-[1px] border-gray-300 outline-none text-gray-400 text-base font-mono' />
        </div>
        <button onClick={()=>addProduct()} className='addproductbutton p-2 border-[1px] mt-5 w-40 h-12 rounded-lg bg-blue-600 border-none text-slate-50 font-medium'>Add</button>
    </div>
  )
}

export default Addproduct