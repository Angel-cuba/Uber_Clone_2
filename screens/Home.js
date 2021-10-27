import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';
import { localRestaurants } from '../constExport/arrayRestaurant';

const YELP_API_KEY =
	'yyZKqfn-Uo90nJ9y5P3hJqFjuqlTdm7AHg8iP6sU_8tHjE4se_1EFloVoI_4I2ZP_7tyCm0bq8_g2b0nsltv_OhvkzFH7IyM8xl8KCH6JLD3mkkDKZOuUqkSckx4YXYx';

const Home = () => {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [city, setCity] = useState('San Francisco');
	const [activeTab, setActiveTab] = useState('Delivery');

	const getRestaurantFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((response) => response.json())
			.then((json) =>
				setRestaurantData(
					json.businesses.filter(
						(business) => business.transactions.includes(activeTab.toLowerCase())
						//console.log(business.transactions.includes(activeTab.toLowerCase()))
					)
				)
			);
	};

	useEffect(() => {
		getRestaurantFromYelp();
	}, [city, activeTab]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.insideContainer}>
				<HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />

				<Restaurants restaurantData={restaurantData} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee',
		flex: 1,
	},
	insideContainer: {
		backgroundColor: 'white',
		padding: 15,
	},
});
