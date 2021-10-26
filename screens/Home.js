import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.insideContainer}>
				<HeaderTab />
				<SearchBar />
			</View>
			<Categories />
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
