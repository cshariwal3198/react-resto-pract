import { memo, useEffect, useState } from 'react';
import { Body, Header, IRestorauntObject } from './components';
import './index.css';

export const App = memo(() => {

  const [restoraunts, setRestoraunts] = useState<IRestorauntObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      return await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING')
        .then((res) => (res.json()).then((data) => {
          setRestoraunts(data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }))
    }
    fetchData()
  }, []);

  return (
    <div className=''>
      <Header />
      <Body restoraunts={restoraunts} />
    </div>
  )
});
