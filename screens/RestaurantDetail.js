import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import About from '../components/restaurantDetails/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/restaurantDetails/MenuItem';
import ViewCart from '../components/restaurantDetails/ViewCart';

const RestaurantDetail = ({ route, navigation }) => {
	// console.log(route);
	return (
		<View>
			<About route={route} />
			<Divider width={0.8} style={{ marginVertical: 10 }} />
			<View style={{ height: Platform.isPad ? 730 : 450 }}>
				<MenuItems navigation={navigation} />

				<ViewCart navigation={navigation} restaurantName={route.params.name} />
			</View>
		</View>
	);
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
