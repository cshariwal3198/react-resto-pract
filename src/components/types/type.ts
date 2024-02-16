export type ICuisineType = {
    name: string;
    url: string;
    deeplink: string
}

export interface IRestorauntObject {
    type: string;
    info: {
        resId: number;
        name: string;
        image: {
            url: string;
            urlWithParams: string
        },
        o2FeaturedImage: {
            url: string;
        },
        rating: {
            aggregate_rating: string;
        },
        locality: {
            name: string;
            address: string;
        },
        cuisine: ICuisineType[]
    }
}
