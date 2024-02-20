import { memo, useEffect, useState } from 'react';
import { Body, Header, IRestorauntObject } from './components';
import './index.css';
import { fetchData } from './service-client';

export const App = memo(() => {

  const [restoraunts, setRestoraunts] = useState<IRestorauntObject[]>([]);

  useEffect(() => {
    const getRestorauntsData = async () => {
      let data;
      try {
        data = await fetchData();
      } catch (err) {
        console.log(err);
      }
      setRestoraunts(data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    getRestorauntsData()
  }, []);

  return (
    <div className=''>
      <Header />
      <Body restoraunts={restoraunts} />
    </div>
  )
});
