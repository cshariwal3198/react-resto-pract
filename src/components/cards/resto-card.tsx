import { IRestorauntObject } from "..";

export const RestoCard = ({ restoraunt }: { restoraunt: IRestorauntObject }) => {

    const { name, locality, cloudinaryImageId, avgRating, veg } = restoraunt.info;

    return (
        <div className="flex flex-col size-80 p-2 pt-2 border-black shadow-md rounded-xl gap-y-2 overflow-hidden cursor-pointer font-serif">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt="failed to load" className="h-40 w-15 rounded-lg" />
            <h2>{name}</h2>
            <h5>{locality}</h5>
            <span>Ratings: {avgRating}</span>
            <h6>{veg ? 'Veg' : 'Non - Veg'}</h6>
        </div>
    );
}