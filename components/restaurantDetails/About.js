import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const yelpRestaurantInfo = {
	name: 'Famous places near you',
	image: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1635267337/bar-kitchen_i9c4ns.jpg',
	reviews: '1499',
	price: '££',
	rating: 4.5,
	categories: [{ title: 'Nice food' }, { title: 'Comfort food' }],
};

// const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const About = ({ route, navigation }) => {
	const { name, image, price, reviews, rating, categories } = route.params;
	const formattedCategories = categories.map((cat) => cat.title).join(' - ');

	const description = `${formattedCategories} ${
		price ? ' - ' + price : ''
	} - 💳 - ${rating} 🎇 (${reviews}+)`;
	return (
		<View>
			{/* Restaurant Image */}
			<RestaurantImage image={image} />
			<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
				<MaterialCommunityIcons name="arrow-left" size={25} color="silver" />
			</TouchableOpacity>
			{/* Restaurant Title */}
			<RestaurantName name={name} />
			{/* Restaurant description */}
			<RestaurantDescription description={description} />
		</View>
	);
};

const RestaurantImage = (props) => (
	<Image source={{ uri: props.image }} style={{ width: '100%', height: 200 }} />
);

const RestaurantName = (props) => (
	<Text
		style={{
			fontSize: 30,
			fontWeight: '700',
			marginTop: 10,
			marginHorizontal: 10,
			textAlign: 'center',
		}}
	>
		{props.name}
	</Text>
);
const RestaurantDescription = (props) => (
	<Text style={{ fontSize: 16, marginHorizontal: 15, fontWeight: '400', marginTop: 10 }}>
		{props.description}
	</Text>
);
export default About;

const styles = StyleSheet.create({});
