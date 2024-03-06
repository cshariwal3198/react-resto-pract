import { Link } from "react-router-dom";
import { IRestorauntObject } from "..";
export const RestoCard = ({ restoraunt }: { restoraunt: IRestorauntObject }) => {

    const imageURL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

    const { name, locality, cloudinaryImageId, avgRating, veg, id } = restoraunt.info;

    return (
        <Link to={`/restoraunt/${id}`}>
            <div className="flex flex-col size-80 p-2 pt-2 border-black shadow-md rounded-xl gap-y-2 overflow-hidden cursor-pointer font-serif">
                <img src={`${imageURL + cloudinaryImageId}`}
                    alt="failed to load" className="h-40 w-15 rounded-lg" />
                <h2>{name}</h2>
                <h5>{locality}</h5>
                <span>Ratings: {avgRating}</span>
                <h6>{veg ? 'Veg' : 'Non - Veg'}</h6>
            </div>
        </Link>
    );
}