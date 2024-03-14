import {
  createBrowserRouter
} from "react-router-dom";
import RootLayout from './components/Layout';
import CartPage from './pages/Cart';
import HomePage from './pages/Home';
import OrderCompletedPage from './pages/OrderCompleted';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/order-completed",
        element: <OrderCompletedPage />
      }
    ]
  },
]);
