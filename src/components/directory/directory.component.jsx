import CategoryItem from "../category-item/category-item"
import './directory.styles.scss'

const categories = [
    {
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    }, {
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    }, {
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },{
      title:  'Women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/hats.png'
    },{
      title: 'Mens', 
      imageUrl: 'https://i.ibb.co/R70vBrQ/hats.png'
    }]

const Directory = () => {
    return (
        <div className='directory-container'>
            {
            categories.map((item, index) => (
                <CategoryItem category={item} key={index}/>
            ))
            }
      </div>
    )
}

export default Directory