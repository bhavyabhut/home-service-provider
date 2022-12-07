import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

export const LoginpageDispathcer = () => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'LOGIN_SUCCESS' });
};

export const LogoutDispathcer = () => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'LOGOUT' });
};

export const SetSearchParameters = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'SET_SEARCH_PARAMS', payload });
};

export const SetCategories = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'SET_CATEGORIES', payload });
};

export const SetStates = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'SET_STATES', payload });
};

export const ErrorDispathcer = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'ERROR', payload });
};

export const RegistrationpageDispathcer = () => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'REGISTRACTIONPAGE' });
};

export const AddhobbiDispathcer = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'ADD_HOBBI', payload });
};
export const SetbobbiDispathcer = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'SET_HOBBI', payload });
};
export const DeletebobbiDispathcer = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'DELETE_HOBBI', payload });
};
export const SetuserDispathcer = (payload) => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'SET_USER', payload });
};
export const ClearDispathcer = () => {
  const { dispatch } = useContext(GlobalContext);
  dispatch({ type: 'CLEAR' });
};
