import { ReactNode, createContext, useContext, useMemo, useReducer } from "react";
import { Product } from "../@types/Product";

type CartContextState = {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
  getQuantity: (id: number) => number;
  getTotal: () => number;
  getItemsCount: () => number;
  getSubtotalByItem: (id: number) => number;
}

type AddItem = { type: 'ADD_ITEM'; payload: Product };
type RemoveItem = { type: 'REMOVE_ITEM'; payload: number };
type Increment = { type: 'INCREMENT'; payload: number };
type Decrement = { type: 'DECREMENT'; payload: number };
type ClearCart = { type: 'CLEAR_CART' };
type CartActions = AddItem | Increment | Decrement | RemoveItem | ClearCart;

export const CartContext = createContext<CartContextState | null>(null)


const increment = (state: Product[], payload: number) => {
  return state.map(item => {
    if (item.id === payload) {
      return {
        ...item,
        quantity: item.quantity + 1,
      } as Product
    }
    return item
  })
}

const decrement = (state: Product[], payload: number) => {
  return state.map(item => {
    if (item.id === payload && item.quantity > 1) {
      return {
        ...item,
        quantity: item.quantity - 1,
      } as Product
    }
    return item
  })
}

const addItem = (state: Product[], payload: Product) => {
  const itemIndex = state.findIndex(item => item.id === payload.id)
  if (itemIndex >= 0) {
    return increment(state, payload.id)
  }

  return [...state, payload]
}

const removeItem = (state: Product[], payload: number) => {
  return state.filter(item => item.id !== payload)
}

const cartReducer = (state: Product[], action: CartActions) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action.payload)
    case 'REMOVE_ITEM':
      return removeItem(state, action.payload)
    case 'INCREMENT':
      return increment(state, action.payload)
    case 'DECREMENT':
      return decrement(state, action.payload)
    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, dispatch] = useReducer(cartReducer, [])

  const value = useMemo(() => {
    return {
      items,
      addItem: (item: Product) => dispatch({ type: 'ADD_ITEM', payload: item }),
      removeItem: (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
      increment: (id: number) => dispatch({ type: 'INCREMENT', payload: id }),
      decrement: (id: number) => dispatch({ type: 'DECREMENT', payload: id }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      getQuantity: (id: number) => items.find(item => item.id === id)?.quantity || 0,
      getSubtotalByItem: (id: number) => {
        const item = items.find(item => item.id === id)
        const price = item?.detail.price || 0
        const quantity = item?.quantity || 0
        return price * quantity
      },
      getTotal: () => items.reduce((acc, item) => acc + (item.detail.price * item.quantity), 0),
      getItemsCount: () => items.reduce((acc, item) => acc + item.quantity, 0),
    } as CartContextState;
  }, [items]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

