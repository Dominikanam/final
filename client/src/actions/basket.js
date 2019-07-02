import { createSagaActions } from './utils';

export const addBasketProduct = createSagaActions('basket/ADD_BASKET_PRODUCT');
export const removeProduct = createSagaActions('basket/REMOVE_PRODUCT');
export const applyVoucher = createSagaActions('basket/APPLY_VOUCHER');
export const incrementProduct = createSagaActions('basket/INCREMENT_PRODUCT');
export const decrementProduct = createSagaActions('basket/DECREMENT_PRODUCT');
export const clearBasket = createSagaActions('basket/CLEAR_BASKET');
