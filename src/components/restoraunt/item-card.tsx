export const ItemCard = ({ item }: { item: any }) => {

    const { card: { info: { name, description, isVeg, price, imageId, category } } } = item;
    return (
        <div className="gap-2 grid">
            <div>
                <h3>{name}</h3>
                <span>{description}</span>
                <span>{price}</span>
                <span>{category}</span>
                <span>{isVeg ? 'Veg' : 'Non - Veg'}</span>
            </div>
            <img className="size-20" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} alt="No image found" />
        </div>
    )
}