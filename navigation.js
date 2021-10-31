import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import OrderCompleted from './screens/OrderCompleted';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';

if (Platform.OS === 'android') {
	require('intl');
	require('intl/locale-data/jsonp/fr-BE');
	require('intl/locale-data/jsonp/nl-BE');
	require('intl/locale-data/jsonp/it-IT');
}

const store = configureStore();

const RootNavigation = () => {
	const Stack = createNativeStackNavigator();

	const screenOptions = {
		headerShown: false,
	};

	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
					<Stack.Screen name="OrderCompleted" component={OrderCompleted} />
				</Stack.Navigator>
			</NavigationContainer>
		</ReduxProvider>
	);
};

export default RootNavigation;

const styles = StyleSheet.create({});
