import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';

const RootNavigation = () => {
	const Stack = createNativeStackNavigator();

	const screenOptions = {
		headerShown: false,
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;

const styles = StyleSheet.create({});
