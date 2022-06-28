import { useCategoriesContext } from '../../context/categories.context'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

const CategoriesPreviewRoute = () => {

  const { categoriesMap } = useCategoriesContext()

  return (
    <>
    {
        Object.keys(categoriesMap).map((item, index) => {
          const products = categoriesMap[item]
          return <CategoryPreview key={index} title={item} products={products}/>
        })
    }
    </>
  )
}

export default CategoriesPreviewRoute