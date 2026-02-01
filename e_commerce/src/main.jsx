import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './RootLayout.jsx';
import Home from './Pages/Home.jsx';
import ShopPage from '../src/Pages/ShopPage.jsx'
import ProductPage from './Pages/ProductPage.jsx';
import { Provider } from 'react-redux'
// import {store} from '../src/Store/store.js'
import store from '../src/Store/store.js'
import ProductDetails from './Pages/ProductDetails.jsx';
import Contact from './Pages/Contact.jsx';
import Cart from '../src/Pages/Cart.jsx'
import WishList from './Pages/WishList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: ProductPage },
      { path: "Contact", Component: Contact },
      { path: "cart", Component: Cart },
      { path: "wishList", Component: WishList },
      { path: "/Details/:id", Component:ProductDetails },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />,
    </Provider>,
  </StrictMode>,
)
