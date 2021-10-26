import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const items = [
	{
		image: require('../assets/images/shopping-bag.png'),
		text: 'Pick up',
	},
	{
		image: require('../assets/images/soft-drink.png'),
		text: 'Soft drink',
	},
	{
		image: require('../assets/images/bread.png'),
		text: 'Bakery items',
	},
	{
		image: require('../assets/images/fast-food.png'),
		text: 'Fast Foods',
	},
	{
		image: require('../assets/images/deals.png'),
		text: 'Deals',
	},
	{
		image: require('../assets/images/coffee.png'),
		text: 'Coffee & Tea',
	},
	{
		image: require('../assets/images/desserts.png'),
		text: 'Desserts',
	},
];

const Categories = () => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{/* loop starts here */}
			<View style={styles.container}>
				<Image source={items[0].image} style={styles.image} />
				<Text style={styles.text}>{items[0].text}</Text>
			</View>
			{/* loop ends here */}
		</ScrollView>
	);
};

export default Categories;

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		resizeMode: 'contain',
	},
	text: {
		fontSize: 14,
		fontWeight: '900',
	},
	container: {
		alignItems: 'center',
		marginRight: 30,
	},
});
