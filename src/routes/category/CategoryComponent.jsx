import './category.styles.scss'
import { useCategoriesContext } from '../../context/categories.context'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/product-card/ProductCard'

const CategoryComponent = () => {

    const { category } = useParams()
    const { categoriesMap }  = useCategoriesContext()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

  return (
    <>
    <h2 className='title'>{category}</h2>
    <div className='category-container-individual'>
      
        {
            products?.map(item => <ProductCard key={item.id} product={item}/>)
        }
    </div>
    </>
  )
}

export default CategoryComponent