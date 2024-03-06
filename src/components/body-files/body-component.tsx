import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import { IRestorauntObject, RestoCard } from "..";
import { fetchData } from "../../service-client";
import { ShimmerBody } from "../shimmer";

const Body = memo(() => {

    const [isTopRated, setisTopRated] = useState(false);
    const [restoraunts, setRestoraunts] = useState<IRestorauntObject[]>([]);
    const [filteredRestoraunts, setFilteredRestoraunts] = useState<IRestorauntObject[]>([]);

    useEffect(() => {
        const getRestorauntsData = async () => {
            let data;
            try {
                data = await fetchData();
            } catch (err) {
                console.log(err);
            }
            setRestoraunts(data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setFilteredRestoraunts(data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        getRestorauntsData()
    }, []);

    const onClick = useCallback(() => setisTopRated(!isTopRated), [isTopRated]);

    const onSearchChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        const textValue = value.toLocaleLowerCase();
        setFilteredRestoraunts([...restoraunts.filter(({ info: { name, areaName } }) => (
            name.toLocaleLowerCase().includes(textValue) || areaName.toLocaleLowerCase().includes(textValue)
        ))]);
    }, [restoraunts]);

    return (
        restoraunts?.length === 0 ? <ShimmerBody /> :
            <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between">
                    <button
                        onClick={onClick}
                        className="border-2 rounded-xl shadow-sm border-black p-2 w-40 mx-8"
                    >
                        {isTopRated ? 'View All' : 'View Top Rated'}
                    </button>
                    <input className=" border-2 border-black-100 p-2 rounded-2xl mx-8" placeholder="Search" onChange={onSearchChange} />
                </div>
                <div className="flex flex-wrap size-full gap-4">
                    {
                        filteredRestoraunts?.filter(({ info: { avgRating } }) => (isTopRated ? avgRating >= 4 : avgRating > 0)).map((restoraunt) => (
                            <RestoCard key={restoraunt.info.id} restoraunt={restoraunt} />
                        ))
                    }
                </div>
            </div>
    )
});

export default Body;