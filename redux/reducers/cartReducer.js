let defaultState = {
	selectedItems: { items: [], restaurantName: '' },
};

let cartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART': {
			let newState = { ...state };
			if (action.payload.checkboxValue) {
				console.log('ADD_TO_CART');

				newState.selectedItems = {
					items: [...newState.selectedItems.items, action.payload],
					restaurantName: action.payload.restaurantName,
				};
			} else {
				newState.selectedItems = {
					items: [
						...newState.selectedItems.items.filter((item) => item.title !== action.payload.title),
					],
					restaurantName: action.payload.restaurantName,
				};
				console.log('remove from state', newState);
			}
			console.log('new state', newState);
			return newState;
		}

		default:
			return state;
	}
};

export default cartReducer;
