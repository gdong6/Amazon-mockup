export const initialState = {
  shoppingCart: [],
  user: null,
};

export const getCartTotal = (shoppingCart) => 
  shoppingCart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.item],
      };

    case 'REMOVE_FROM_CART':
      const index = state.shoppingCart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.shoppingCart];
      if(index >=0 ) {
        newCart.splice(index,1);
      } else {
        console.warn(`can't remove product (id: ${action.id}) as its not in cart!`)
      }
      return {
        ...state, 
        shoppingCart: newCart
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }


    default:
  };

    return state;
};

export default reducer;