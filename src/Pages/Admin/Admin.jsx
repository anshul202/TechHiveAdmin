import Addproduct from '../../Components/Addproduct/Addproduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route, Navigate} from 'react-router-dom'



const Admin = () => {
  if(!localStorage.getItem('token')){
      return <Navigate to='/'/>
  }
  return (
    <div className='admin flex max-md:flex-col '> 
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin