import "./restaurant.css";

import PageHeader from "../PageHeader";
import DishCard from "../DishCard";
import Basket from "../Basket";

const Restaurant = ({
    restaurant_data,
    restaurant_categories
}) => {
    console.log(
        restaurant_data,
        restaurant_categories
    )
    return (
        <div className="restaurant-wrapper">
            <PageHeader />
            <section id="restaurant-introduction">
                <div className="container">
                    <img className="introduction-image" src={restaurant_data.picture} alt={`${restaurant_data.name} presentation`} />
                    <div className="introduction-body">
                        <h1>{restaurant_data.name}</h1>
                        <p>{restaurant_data.description}</p>
                    </div>
                </div>
            </section>
            <section id="restaurant-menu">
                <div className="container">
                    <div className="menu-container">
                        {restaurant_categories.map((category) => {
                            // Rendering the category and its corresponding meals if it has any
                            if (category.meals.length > 0) {
                                return (
                                    <div className="category-container">
                                        <h2>{category.name}</h2>
                                        {category.meals.map((meal) => {
                                            return (
                                                <DishCard
                                                    dish_name={meal.title}
                                                    dish_description={meal.description}
                                                    dish_price={meal.price}
                                                    dish_image={meal.picture}
                                                    dish_popular={meal.popular}
                                                />
                                            )
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="basket-container">
                        <Basket />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Restaurant;