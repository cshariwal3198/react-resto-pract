import { Body, Header, IRestorauntObject } from './components';
import { restoraunts } from './data/restoraunts';
import './index.css';

export const App = () => {

  restoraunts;

  return (
    <div className=''>
      <Header />
      <Body restoraunts={restoraunts as IRestorauntObject[]} />
    </div>
  )
}
