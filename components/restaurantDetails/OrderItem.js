import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrderItem = ({ item }) => {
	const { title, price } = item;
	return (
		<View style={styles.container}>
			<Text style={{ fontWeight: '600', fontSize: 16 }}>{title}</Text>
			<Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
		</View>
	);
};

export default OrderItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#999',
	},
});
