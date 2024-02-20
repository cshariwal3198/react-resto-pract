import React, { memo, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Header } from './components';
import './index.css';

export const App = memo(() => {

  return (
    <div className=''>
      <Header />
      <Outlet />
    </div>
  )
});

const Body = lazy(() => import('./components/body-files/body-component'));
const About = lazy(() => import('./components/navbar/about'));
const Cart = lazy(() => import('./components/navbar/cart'));
const Explore = lazy(() => import('./components/navbar/explore'));
const ContactUs = lazy(() => import('./components/navbar/contact'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/explore',
        element: <Explore />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={appRouter} />
    </Suspense>
  </React.StrictMode>,
)
