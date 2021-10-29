import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_KEY } from '@env';

const SearchBar = ({ cityHandler }) => {
	return (
		<View style={styles.container}>
			<GooglePlacesAutocomplete
				query={{ key: API_KEY, language: 'en' }}
				nearbyPlacesAPI="GooglePlacesSearch"
				placeholder="Search your place...."
				debounce={400}
				returnKeyType={'default'}
				fetchDetails={true}
				minLength={2}
				autoFocus={false}
				styles={{
					container: {
						flex: 0,
					},
					textInput: {
						backgroundColor: '#eee',
						borderRadius: 20,
						fontWeight: '700',
						marginTop: 7,
					},
					textInputContainer: {
						backgorungColor: 'red',
						borderRadius: 50,
						flexDirection: 'row',
						alignItems: 'center',
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 1 }}>
						<Ionicons name="location-sharp" size={24} color="black" />
					</View>
				)}
				renderRightButton={() => <Text>Text</Text>}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					// console.log(data.description);.split(',')[0];
					const city = data.description;
					console.log(city);
					cityHandler(city);
				}}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	container: {
		marginVertical: 15,
		// flexDirection: 'column',
	},
	searchBar: {},
});
