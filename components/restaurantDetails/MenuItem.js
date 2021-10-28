import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { food } from '../../constExport/arrayRestaurantDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const MenuItems = ({ navigation }) => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{food.map((foodItem, index) => (
				<View key={index} style={styles.mainContent}>
					<View style={styles.menuItemContainer}>
						<BouncyCheckbox
							iconStyle={{ borderColor: 'silver', borderRadius: 0 }}
							fillColor="green"
						/>
						<Foodinfo food={foodItem} />
						<FoodImage food={foodItem} />
					</View>
					{/* <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
						<MaterialCommunityIcons name="arrow-left" size={25} color="silver" />
					</TouchableOpacity> */}

					<Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
				</View>
			))}
		</ScrollView>
	);
};
const Foodinfo = (props) => (
	<View style={styles.foodInfo}>
		<Text style={styles.textStyle}>{props.food.title}</Text>
		<Text style={styles.description}>{props.food.description}</Text>
		<Text style={styles.price}>{props.food.price}</Text>
	</View>
);

const FoodImage = (props) => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{ width: 100, height: 100, borderRadius: 10 }}
		/>
	</View>
);

export default MenuItems;

const styles = StyleSheet.create({
	mainContent: { flex: 1 },
	menuItemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 20,
	},
	foodInfo: {
		width: 240,
		justifyContent: 'space-evenly',
	},
	textStyle: {
		fontSize: 20,
		fontWeight: '700',
		marginLeft: 30,
	},
	description: {
		textAlign: 'center',
	},
	price: {
		textAlign: 'center',
		fontWeight: '600',
	},
});
