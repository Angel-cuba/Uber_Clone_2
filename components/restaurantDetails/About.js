import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const yelpRestaurantInfo = {
	name: 'Famous places around the world',
	image: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1635267337/bar-kitchen_i9c4ns.jpg',
	reviews: '1499',
	price: '££',
	rating: 4.5,
	categories: [{ title: 'Nice food' }, { title: 'Comfort food' }],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(' - ');

const description = `${formattedCategories} ${
	price ? ' - ' + price : ''
} - 💳 - ${rating} 🎇 (${reviews}+)`;

const About = () => {
	return (
		<View>
			{/* Restaurant Image */}
			<RestaurantImage image={image} />
			{/* Restaurant Title */}
			<RestaurantName name={name} />
			{/* Restaurant description */}
			<RestaurantDescription description={description} />
		</View>
	);
};

const RestaurantImage = (props) => (
	<Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
);

const RestaurantName = (props) => (
	<Text
		style={{
			fontSize: 30,
			fontWeight: '700',
			marginTop: 10,
		}}
	>
		{props.name}
	</Text>
);
const RestaurantDescription = (props) => (
	<Text style={{ fontSize: 16, marginHorizontal: 15, fontWeight: '400' }}>{props.description}</Text>
);
export default About;

const styles = StyleSheet.create({});
