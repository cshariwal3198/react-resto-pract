import { useCallback, useMemo, useState } from "react";
import { RestoCard } from "..";
import { IRestorauntObject } from "../types/type";

export const Body = ({ restoraunts }: { restoraunts: IRestorauntObject[] }) => {

    const [isTopRated, setisTopRated] = useState(false)

    const onClick = useCallback(() => setisTopRated(!isTopRated), [isTopRated]);

    const restorauntList = useMemo(() => (
        isTopRated ? restoraunts.filter(({ info: { rating: { aggregate_rating } } }) => (Number(aggregate_rating) >= 4)) : restoraunts
    ), [isTopRated, restoraunts]);

    return (
        <div className="p-5 flex flex-col gap-2">
            <button
                onClick={onClick}
                className="border-2 rounded-xl shadow-sm border-black p-2 w-40 mx-8"
            >
                {isTopRated ? 'View All' : 'View Top Rated'}
            </button>
            <div className="flex flex-wrap size-full gap-4">
                {
                    restorauntList.map((restoraunt) => (
                        <RestoCard key={restoraunt.info.resId} restoraunt={restoraunt} />
                    ))
                }
            </div>
        </div>
    )
};