import { memo, useCallback, useEffect, useState } from "react";
import { RestoCard } from "..";
import { IRestorauntObject } from "../types/type";

export const Body = memo(({ restoraunts }: { restoraunts: IRestorauntObject[] }) => {

    const [isTopRated, setisTopRated] = useState(false);
    const [restolist, setRestoList] = useState<IRestorauntObject[]>([])

    useEffect(() => {
        setRestoList(restoraunts)
    }, [restoraunts]);

    const onClick = useCallback(() => setisTopRated(!isTopRated), [isTopRated]);

    const onSearchChange = useCallback(({ target }) => {
        const textValue = target.value.toLocaleLowerCase();
        setRestoList([...restoraunts.filter(({ info: { name, areaName } }) => (
            name.toLocaleLowerCase().includes(textValue) || areaName.toLocaleLowerCase().includes(textValue)
        ))]);
    }, [restoraunts]);

    return (
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
                    restolist.filter(({ info: { avgRating } }) => (isTopRated ? avgRating >= 4 : avgRating > 0)).map((restoraunt) => (
                        <RestoCard key={restoraunt.info.id} restoraunt={restoraunt} />
                    ))
                }
            </div>
        </div>
    )
});