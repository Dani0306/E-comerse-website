import './shop.styles.scss'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreviewRoute from '../categories-preview/CategoriesPreviewRoute'
import CategoryComponent from '../category/CategoryComponent'

const Shop = () => {

  return (
    <div className='shop-container'>
        <Routes>
          <Route index element={<CategoriesPreviewRoute />}></Route>
          <Route path=":category" element={<CategoryComponent />}/>
        </Routes>
    </div>
  )
}

export default Shop