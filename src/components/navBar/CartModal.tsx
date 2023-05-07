
export const CartModal = () => {
    return(
        <div className="carContainer">
            <h3>{`My Bag, item`}</h3>
            <div className="total">
                <p>Total</p>
                <p>{`1000`}</p>
            </div>
            <div className="buttons">
                <button>VIEW BAG</button><button>CHECKOUT</button>
            </div>
        </div>
    )
}