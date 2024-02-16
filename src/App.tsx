import { Body } from './components/body-files/body-component';
import { Header } from './components/header files/header-component';
import { restoraunts } from './data/restoraunts';
import './index.css';

export const App = () => {

  restoraunts;

  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}
