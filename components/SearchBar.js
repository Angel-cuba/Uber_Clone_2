import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_KEY } from '@env';

const SearchBar = () => {
	return (
		<View style={styles.container}>
			<View>
				<GooglePlacesAutocomplete
					query={{ key: API_KEY, language: 'en' }}
					nearbyPlacesAPI="GooglePlacesSearch"
					placeholder="Search your place...."
					debounce={400}
					returnKeyType={'default'}
					fetchDetails={true}
					minLength={2}
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
							backgorungColor: '#eee',
							borderRadius: 30,
							flexDirection: 'row',
							alignItems: 'center',
							marginRight: 10,
						},
					}}
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						console.log(data, details);
					}}
					minLength={2}
					autoFocus={false}
				/>
			</View>

			{/* // renderLeftButton={() => (
				// 	<View style={{ marginLeft: 10 }}>
				// 		<Ionicons name="location-sharp" size={24} color="black" />
				// 	</View>
				// )}
				//renderRightButton={() => <Ionicons name="location-sharp" size={24} color="black" />} */}
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	container: {
		marginVertical: 15,
		// justifyContent: 'center',
	},
	searchBar: {},
});
