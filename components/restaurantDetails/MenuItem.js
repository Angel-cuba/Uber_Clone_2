import React, { useState } from 'react';
import { Image, ScrollView, Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { food } from '../../constExport/arrayRestaurantDetails';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { useDispatch, useSelector } from 'react-redux';

const MenuItems = ({ restaurantName }) => {
	const dispatch = useDispatch();
	const selectItem = (item, checkboxValue) =>
		dispatch({
			type: 'ADD_TO_CART',
			payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue },
		});

	const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

	const isFoodInCart = (foodItem, cartItems) =>
		Boolean(cartItems.find((cartItem) => cartItem.title === foodItem.title));

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{food.map((foodItem, index) => (
				<View key={index} style={styles.mainContent}>
					<View style={styles.menuItemContainer}>
						<BouncyCheckbox
							iconStyle={{ borderColor: '#0bab64', borderRadius: Platform.isPad ? 13 : 4 }}
							size={Platform.isPad ? 35 : 26}
							fillColor="green"
							isChecked={isFoodInCart(foodItem, cartItems)}
							onPress={(checkboxValue) => selectItem(foodItem, checkboxValue)}
						/>
						<Foodinfo food={foodItem} />
						<FoodImage food={foodItem} />
					</View>

					<Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
				</View>
			))}
		</ScrollView>
	);
};
const Foodinfo = (props) => (
	<View style={styles.foodInfo}>
		<Text style={styles.textStyle}>{props.food.title}</Text>
		<Text style={styles.description}>{props.food.description}</Text>
		<Text style={styles.price}>{props.food.price}</Text>
	</View>
);

const FoodImage = (props) => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{
				width: Platform.isPad ? 150 : 100,
				height: Platform.isPad ? 130 : 100,
				borderRadius: 10,
			}}
		/>
	</View>
);

export default MenuItems;

const styles = StyleSheet.create({
	mainContent: { flex: 1 },
	menuItemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginRight: Platform.isPad ? 30 : 20,
		paddingVertical: 20,
		paddingLeft: Platform.isPad ? 30 : 20,
	},
	foodInfo: {
		width: Platform.isPad ? 350 : 220,
		justifyContent: 'space-evenly',
	},
	textStyle: {
		fontSize: Platform.isPad ? 25 : 20,
		fontWeight: '700',
		// marginLeft: 30,
		textAlign: 'center',
	},
	description: {
		textAlign: 'center',
	},
	price: {
		textAlign: 'center',
		fontWeight: '600',
	},
});
