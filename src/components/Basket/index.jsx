const Basket = ({ basket_items }) => {
    return (
        <div className="basket-wrapper">
            <div className="container">
                <button className={basket_items ? `cta-button` : `cta-button inactive-button`}>
                    Voir le panier
                </button>
                <div className="basket-items">
                    {basket_items ? <p>Vos articles</p> : <p>Votre panier est vide</p>}
                </div>
            </div>
        </div>
    )
}

export default Basket;