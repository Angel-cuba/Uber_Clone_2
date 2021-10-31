import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

const OrderCompleted = () => {
	const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

	const total = items
		.map((item) => Number(item.price.replace('£', '')))
		.reduce((prev, curr) => prev + curr, 0);

	const totalUSD = total.toLocaleString('eu', {
		style: 'currency',
		currency: 'EUR',
	});

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.insideContainer}>
				{/* Top animation */}
				<LottieView
					style={{ height: 100, alignItems: 'center', marginBottom: 30 }}
					source={require('../assets/animations/check-mark.json')}
				/>
				<Text>
					This order at {restaurantName} has been placed for {totalUSD}
				</Text>
				{/* MenuItem choosed */}

				{/* Cooking animation */}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	insideContainer: {
		marginVertical: 20,
		marginHorizontal: 20,
	},
});

export default OrderCompleted;
