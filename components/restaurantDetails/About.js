import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const image =
	'https://res.cloudinary.com/dqaerysgb/image/upload/v1635267337/bar-kitchen_i9c4ns.jpg';

const title = 'Famous places';
const description = 'Bar Comfort';

const About = () => {
	return (
		<View>
			{/* Restaurant Image */}
			<RestaurantImage image={image} />
			{/* Restaurant Title */}
			<RestaurantTitle title={title} />
			{/* Restaurant description */}
			<RestaurantDescription description={description} />
		</View>
	);
};

const RestaurantImage = (props) => (
	<Image source={{ uri: props.image }} style={{ width: '100%', height: 200 }} />
);

const RestaurantTitle = (props) => (
	<Text
		style={{
			fontSize: 30,
			fontWeight: '700',
			marginTop: 10,
		}}
	>
		{props.title}
	</Text>
);
const RestaurantDescription = (props) => (
	<Text style={{ fontSize: 16, marginHorizontal: 15, fontWeight: '400' }}>{props.description}</Text>
);
export default About;

const styles = StyleSheet.create({});
