import "./dish-card.css";

const DishCard = ({
    dish_name,
    dish_description,
    dish_price,
    dish_image,
    dish_popular
}) => {
    return (
        <div className="dish-card">
            <div className="dish-body">
                <h3>{dish_name}</h3>
                <p>{dish_description}</p>
                <div className="dish-details">
                    <span className="dish-price">{dish_price} €</span>
                    {dish_popular === true &&
                        <span className="dish-tag">
                            Populaire
                        </span>
                    }
                </div>
            </div>
            {dish_image && <img className="dish-image" src={dish_image} alt={`${dish_name} presentation`} />}
        </div>
    )
}

export default DishCard;