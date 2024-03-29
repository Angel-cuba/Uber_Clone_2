import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
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
			<View style={{ height: Platform.isPad ? 640 : 475 }}>
				<MenuItems restaurantName={route.params.name} />

				<ViewCart navigation={navigation} />
			</View>
		</View>
	);
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
