export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_STATS = 'SET_STATS';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DISABLE_PRODUCT = 'DISABLE_PRODUCT';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setStats = (stats) => ({
  type: SET_STATS,
  payload: stats,
});

export const editProduct = (index, updatedProduct) => ({
  type: EDIT_PRODUCT,
  payload: { index, updatedProduct },
});

export const deleteProduct = (index) => ({
  type: DELETE_PRODUCT,
  payload: index,
});

export const disableProduct = (index) => ({
  type: DISABLE_PRODUCT,
  payload: index,
});
