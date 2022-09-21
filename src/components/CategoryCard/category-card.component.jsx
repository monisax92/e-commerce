import './category-card.styles.scss'

const CategoryCard = ({categoryInfo}) => {

    const {imageUrl, name} = categoryInfo;

    return (
        <div className='category-container'>
            <div className="background-image" style={{
                backgroundImage: `url('${imageUrl}')`
            }}/>
            <div className="category-info-container">
                <h2>{name}</h2>
                <button>Show more</button>
            </div>
        </div>
    )
}

export default CategoryCard;