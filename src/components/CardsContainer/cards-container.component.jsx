import './cards-container.styles.css'

import CategoryCard from '../CategoryCard/category-card.component'

const CardsContainer = ({containerType, data}) => {

    return (
        <div className={containerType}>
            {data.map(category => (
            <CategoryCard key={category.id} categoryInfo={category} />
            ))}
        </div>
    )
}

export default CardsContainer;