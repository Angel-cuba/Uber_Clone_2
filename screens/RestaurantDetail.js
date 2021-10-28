import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from '../components/restaurantDetails/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/restaurantDetails/MenuItem';

const RestaurantDetail = ({ route, navigation }) => {
	console.log(route);
	return (
		<View>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItems navigation={navigation} />
		</View>
	);
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
