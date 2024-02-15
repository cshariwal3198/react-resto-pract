import { Body } from './components/body-files/body-component';
import { Header } from './components/header files/header-component';
import { restoraunts } from './data/restoraunts';

export const App = () => {

  restoraunts;

  return (
    <>
      <Header />
      <Body />
    </>
  )
}
