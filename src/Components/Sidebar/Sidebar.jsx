import { Link } from 'react-router-dom'
import { TbShoppingCartPlus } from "react-icons/tb";
import { BsCollection } from "react-icons/bs";


const Sidebar = () => {
  return (
    <div className='flex flex-col pt-7 gap-5 max-w-[250px] h-[100vh] bg-slate-50 max-md:flex-row max-md:max-w-none max-md:h-auto max-md:py-7 max-md:px-0 max-md:justify-center'>
        <Link to={'addproduct'} className='no-underline'>
        <div className='sidebaritem flex items-center justify-center my-0 mx-5 py-1 px-3 border-6 bg-gray-100 gap-5 '>
            <TbShoppingCartPlus size={50}/>
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'listproduct'} className='no-underline'>
        <div className='sidebaritem flex items-center justify-center my-0 mx-5 py-1 px-3 border-6 bg-gray-100 gap-5'>
            <BsCollection size={50}/>
            <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar