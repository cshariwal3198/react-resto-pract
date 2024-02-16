import { IRestorauntObject } from "..";

export const RestoCard = ({ restoraunt }: { restoraunt: IRestorauntObject }) => {
    const { image, name, locality, rating } = restoraunt.info;

    return (
        <div className="flex flex-col size-80 p-2 pt-2 border-black shadow-md rounded-xl gap-y-2 overflow-hidden cursor-pointer font-serif">
            <img src={image.url} alt="failed to load" className="h-40 w-15 rounded-lg" />
            <h2>{name}</h2>
            <h5>{locality.address}</h5>
            <span>Ratings: {rating.aggregate_rating}</span>
        </div>
    );
}