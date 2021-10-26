import React from 'react';
import { Image, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Restaurants = ({ restaurantData }) => {
	// console.log(restaurantData);
	return (
		<TouchableOpacity activeOpacity={0.9} style={{ marginBottom: 30 }}>
			{restaurantData.map((restaurant, index) => (
				<View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
					<RestaurantImage image={restaurant.image_url} />
					<RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
				</View>
			))}
		</TouchableOpacity>
	);
};

export default Restaurants;

const RestaurantImage = ({ image }) => (
	<>
		<Image source={{ uri: image }} style={styles.restaurantImage} />
		<TouchableOpacity style={styles.restaurantOpacity}>
			<MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = ({ name, rating }) => (
	<View style={styles.restaurantInfo}>
		<View>
			<Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
			<Text style={{ fontSize: 13, color: 'gray' }}>30-45 . minutes</Text>
		</View>
		<View
			style={{
				backgroundColor: '#eee',
				height: 30,
				width: 30,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 15,
			}}
		>
			<Text>{rating}</Text>
		</View>
	</View>
);
const styles = StyleSheet.create({
	restaurantImage: {
		width: '100%',
		height: Platform.OS === 'android' || 'ios' ? 180 : 300,
	},
	restaurantOpacity: {
		position: 'absolute',
		right: 20,
		top: 20,
	},
	restaurantInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
	text: {
		color: 'black',
	},
});
