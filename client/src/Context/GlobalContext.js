import React, { createContext, useReducer, useMemo } from 'react';

const initial = {
  loading: true,
  isLoggedIn: false,
  isMerchant: false,
  page: {
    login: true,
    registration: false,
    item: false,
  },
  items: [],
  error: {
    error: false,
    msg: '',
  },
  success: {
    error: false,
    msg: '',
  },
  user: {},
  categories: [],
  states: [],
  search: {
    name: '',
    state: '',
    city: '',
    category: '',
  },
};
export const GlobalContext = createContext(initial);
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'SET_MERCHANT':
      return {
        ...state,
        isMerchant: action.isMerchant,
      };
    case 'LOGOUT':
      localStorage.setItem('auth-token', null);
      localStorage.setItem('user_id', null);
      return {
        ...state,
        page: { login: true, registration: false, item: false },
        user: {},
        isLoggedIn: false,
        isMerchant: false,
      };
    case 'SET_SEARCH_PARAMS':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'SET_STATES':
      return {
        ...state,
        states: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_HOBBI':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'DELETE_HOBBI':
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case 'ADD_HOBBI':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REGISTRACTIONPAGE':
      return {
        ...state,
        page: { login: false, registration: true, item: false },
      };
    case 'ITEMPAGE':
      return {
        ...state,
        page: { login: false, registration: false, item: true },
      };
    case 'LOGINPAGE':
      return {
        ...state,
        page: { login: true, registration: false, item: false },
      };

    case 'ERROR':
      return {
        ...state,
        error: {
          error: true,
          msg: action.payload,
        },
      };
    case 'SUCCESS':
      return {
        ...state,
        success: {
          success: true,
          msg: action.payload,
        },
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: {
          error: false,
          msg: '',
        },
        success: {
          success: false,
          msg: '',
        },
      };
    default:
      return state;
  }
};
export function Provider({ children }) {
  const [data, dispatch] = useReducer(reducer, initial);
  const value = useMemo(() => ({ data, dispatch }), [data, dispatch]);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
