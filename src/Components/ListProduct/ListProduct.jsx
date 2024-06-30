import  { useEffect, useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";


const ListProduct = () => {
  const [AllProducts, setAllProducts] = useState([])
  const removeProduct=async(id)=>{
    const res=await fetch(`${import.meta.env.VITE_URL+'/deleteproduct'}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:id
      })
    }).then((res)=>res.json()).then((data)=>console.log(data));
    fetchinfo();
  }
  const fetchinfo=async()=>{
    const res=await fetch(`${import.meta.env.VITE_URL+'/allproducts'}`).then((res)=>res.json()).then((data)=>setAllProducts(data));
    console.log(AllProducts);    
  }
  useEffect(() => {

    fetchinfo();
   }, [])

  return (
    <div className='listproduct flex flex-col items-center w-full h-[740px] py-[10px] px-[50px] m-7 rounded-md bg-white text-center max-md:box-border max-md:m-95% max-md:h-full max-md:py-[10px] max-md:px-[30px] '>
        <h1>All Products</h1>
        <div className="list-product-mainformat grid grid-cols-[1fr,3fr,1fr,1fr,1fr,1fr] gap-2 w-full py-5 px-0 text-zinc-600 text-base font-semibold">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="list-allproducts overflow-y-auto">
          <hr />
          {AllProducts.map((product,index)=>{
            return(
            <div key={index}>
            <div className='grid grid-cols-[1fr,3fr,1fr,1fr,1fr,1fr] gap-[10px] w-full py-5 px-0 text-zinc-600 text-base items-center font-medium max-md:py-[15px] max-md:px-0 max-md:text-xs '>
              <img src={product.image} alt="" className='listproduct-producticon h-20 max-md:h-14'/>
              <p>{product.name}</p>
              <p>{"\u20b9"+product.old_price}</p>
              <p>{"\u20b9"+product.new_price}</p>
              <p>{product.category}</p>
              <button className="listproduct-remove cursor-pointer m-auto flex items-center justify-center" onClick={()=>removeProduct(product.id)}><IoIosRemoveCircleOutline size={40}/></button>
            </div>
            <hr/>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default ListProduct