export const SET_CURRENCY = 'SET_CURRENCY';

export function setCurrency(currency) {
    return {
      type: 'SET_CURRENCY',
      payload: currency
    };
  }