export const fetchData = async () => (
    await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING').then((res) => (
        res.json()))
)