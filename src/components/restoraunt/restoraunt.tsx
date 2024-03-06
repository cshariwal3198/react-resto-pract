import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRestorauntInfo } from "../../service-client";
import { ItemCard } from "./item-card";

const Restoraunt = () => {

    const { resId } = useParams();

    const [restorauntInfo, setRestorauntInfo] = useState<any>([]);

    useEffect(() => {
        const getRestoData = async () => {
            const data = await getRestorauntInfo(resId!)
            setRestorauntInfo(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        }
        getRestoData()
    }, [resId]);

    console.log(restorauntInfo);

    return (
        <>
            <div className="flex justify-center font-semibold py-3">Restoraunt Details</div>
            <div className="flex flex-col justify-center gap-3 items-center">
                {
                    restorauntInfo[1]?.card?.card?.itemCards?.map((item) => (
                        <ItemCard item={item} key={item} />
                    ))
                }
            </div>
        </>
    )
}

export default Restoraunt;