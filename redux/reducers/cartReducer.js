let defaultState = {
	selectedItem: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_ITEM": {
			let newState = { ...state };
			if (action.payload.checkboxValue) {
				console.log("Agrego un nuevo producto");
				newState.selectedItem = {
					items: [...state.selectedItem.items, action.payload],
					restaurantName: action.payload.restaurantName,
				};
			} else {
				console.log("Eliminado del carrito");
				newState.selectedItem = {
					items: [
						...state.selectedItem.items.filter(
							(item) => item.title !== action.payload.title
						),
					],
					restaurantName: action.payload.restaurantName,
				};
			}
			console.log(newState, "👉");
			return newState;
		}

		default:
			return state;
	}
};

export default cartReducer;
