export type ICuisineType = {
    name: string;
    url: string;
    deeplink: string
}

export interface IRestorauntObject {
    cta: {
        link: string;
        type: string;
    }
    info: {
        id: number;
        cuisine: string[];
        areaName: string;
        avgRating: number;
        name: string;
        veg: boolean;
        cloudinaryImageId: string;
        locality: string;
    }
}
