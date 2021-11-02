import { useReducer } from 'react';

const actionType = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionType.clearValues:
      return { ...action.initialValues };
    case actionType.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionType.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = (initialValues) => {
    dispatch({ type: actionType.clearValues, initialValues });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionType.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionType.consentToggle });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
