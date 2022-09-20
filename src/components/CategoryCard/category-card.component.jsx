import './category-card.styles.scss'

const CategoryCard = ({categoryInfo}) => {
    return (
        <div className='category-container'>
            <div className="background-image" style={{
                backgroundImage: `url('${categoryInfo.imageUrl}')`
            }}/>
            <div className="category-info-container">
                <h2>{categoryInfo.name}</h2>
                <button>Show more</button>
            </div>
        </div>
    )
}

export default CategoryCard;