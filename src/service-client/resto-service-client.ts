import { CDN_URL, MENU_API } from "./constants";

export const fetchData = async () => (
    await fetch(CDN_URL).then((res) => (
        res.json()))
)

export const getRestorauntInfo = async (id: string) => (
    await fetch(MENU_API + id).then((data) => (data.json()))
)