export const initialState = {
    basket: [],
    user: null,
}
// Selector
export const getBasketTotal = (basket) => 
    basket.reduce((acc, item)=> acc += item.price, 0)


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id 
            );
            // copy of current basket
            let newBasket = [...state.basket];
            // remove item with selected index in basket array
            if (index >=0 ) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        default:
            return state;
    }
}

export default reducer;